const fs = require('fs');
const path = require('path');

// Data for generating Markdown files
const pages = [
  { id: 'prism-player', app: 'Prism Player', path: 'Player', excludes: ["layer-options"] },
  { id: 'prism-zero', app: 'Prism Zero', path: 'Zero' },
  { id: 'prism', app: 'Prism', path: 'Prism' },
  // Add more pages as needed
]

function copyDirectoryContents(excludes, sourceDir, targetDir) {
    // Ensure that both source and target directories exist
    if (!fs.existsSync(sourceDir)) {
        console.error("Source directory does not exist.");
        return;
    }

    // Create target directory if it does not exist
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Get the list of files in the source directory
    const files = fs.readdirSync(sourceDir);

    // Iterate over each file in the source directory
    files.forEach(file => {

      if (excludes?.includes(file.split('.')[0])) 
        return;

      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      // Check if the file is a directory
      if (fs.statSync(sourcePath).isDirectory()) {
          // Recursively copy the directory
          copyDirectoryContents(excludes, sourcePath, targetPath);
      } else {
          // Copy the file
          fs.copyFileSync(sourcePath, targetPath);
      }
    });

    //console.log("Directory contents copied successfully.");
}


// Function to replace text in a file
function replaceTextInFile(filePath, page) {
  const content = fs.readFileSync(filePath, 'utf8');
  const result = content.
  replace(new RegExp('{{PRISM-APP}}', 'g'), page.app).
  replace(new RegExp('{{PRISM-PATH}}', 'g'), page.path);
  fs.writeFileSync(filePath, result, 'utf8');
}

// Function to copy a file
function copyFile(source, target) {
  fs.copyFileSync(source, target);
}

function processFiles(directoryPath, page) {

  fs.readdirSync(directoryPath).forEach(file => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      replaceTextInFile(filePath, page);
      const newFilePath = path.join(directoryPath, file);
      copyFile(filePath, newFilePath);
    } else if (stats.isDirectory()) {
      processFiles(filePath, page); // Recursively process subdirectories
    }
  });

}

const currentDirectory = process.cwd();

// Generate Markdown files
pages.forEach(page => {

  let sourceDir = path.join(currentDirectory, 'shared');
  let targetDir = path.join(currentDirectory, page.path);
  //console.log(sourceDir, targetDir);
  copyDirectoryContents(page.excludes, sourceDir, targetDir);

  processFiles(targetDir, page);

});