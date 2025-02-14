const path = require('path');
const fs = require('fs');
const avoParse = require('./avoParse')
const { execSync } = require("child_process");
const { program } = require("../website/node_modules/commander");
//const console = require('node:console');
//const console = require('node:console');
const versions = require(avoParse.paths.versions);

const legalPath = path.join(__dirname,"PDF/legal-en.md");
const templatePath = path.join(__dirname,"PDF/eisvogel_avo.latex");
const sectionNumberFilter = path.join(__dirname,"PDF/lua-section-number-filter.lua");
const sectionNumberFilterDe = path.join(__dirname,"PDF/lua-section-number-filter-de.lua");
const headerPath = path.join(__dirname,"PDF/header.yaml");
const logoPath = path.join(__dirname,"PDF/avo.png");

// Command line options
program
  .option('-v, --manversion <version>', 'specify which version to produce, use "-v next" to produce the /docs folder')
  .option('-s, --section <section>', 'specify a specific section to output, e.g. -s synergy')
  .option('-o, --output-dir <dir>', 'specify the directory the PDF is output to, e.g. -o ~/Desktop')
  .option('--no-legal', 'omit the legal section of the manual')
  .parse(process.argv);

program.outputDir = setOutputDir(program.outputDir);

let manversion = program.manversion ? program.manversion.toLowerCase() : "all";
const section = program.section ? program.section.toLowerCase() : null;

// the link text 'Section' is set in the lua-section-number-filter.lua
// in order to translate this copy the lua file, translate this word, add the file as constant above, 
// and select it based on the language in generatePDF() below
let secfilter = sectionNumberFilter;

const options = {
  legal: program.legal,
  outputDir: program.outputDir,
}

for(let version of avoParse.getVersions(manversion)) {
  createPDF(version, section, options);
}

/**
 * Get all of the versions of the docs specified in the versions.json file, plus `next`
 * @return {array} Array of the versions, e.g. ['12.0','13.0','next']
 */
function getVersions() {
  let allVersions = versions;
  allVersions.push('next');
  return allVersions;
}

/**
 * Request a path to output to, creating it if necessary
 * @param {string} req (Optional) The path to the requested output directory
 * @param {string} def (Optional) The default path to output to
 * @return {string} The absolute path to the output directory without the trailing slash
 */
function setOutputDir(req='',def=avoParse.paths.outputDir) {
  if(req) {
    let userOutputDir = path.resolve(req);

    fs.access(userOutputDir, fs.constants.W_OK, function(err) {
      if(err){
        req = def;
        process.emitWarning(`Could not write to ${userOutputDir}, instead writing to ${def}`);
      }

      req = userOutputDir;
    });
  }
  else {
    req = def
  }

  // create the output folder if it doesn't exist
  if(!fs.existsSync(req)) {
    fs.mkdirSync(req);
  }

  return req;
}

/**
 * Converts `filename` to a MarkDown title anchor link.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @return {string} A MarkDown title anchor link, e.g. `#cues-creating-a-cue.md`
 */
function filenameToTitleLink(filename) {
  return "#" + filename.replace("/","-");
}

/**
 * Replaces the headings with lower level so the levels work correctly
 * @param {string} content Contents of the .md file with YAML block in
 * @return {string} The content with the headings replaced
 */
 function replaceHeadings(content) {
  content = content.replace(/^### (.*)/gm,"#### $1");
  content = content.replace(/^## (.*)/gm,"### $1");

  return content;
}

/**
 * Replaces the YAML block in the file with a heading
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with YAML block in
 * @return {string} The content with the YAML block replaced
 */
function replaceYaml(filename,content,sectionHeading) {
  // matches Yaml block with title
  return content.replace(avoParse.regex.yamlBlockTitle,function (match,title) {
    titleLink = filenameToTitleLink(filename);
    let sectionHeadingText = "";
    if (!filename.match("/")) {
      sectionHeadingText = `\\pagebreak \n# ${sectionHeading}\n\n`
    }
    return `${sectionHeadingText}## ${title} {${titleLink}}`;
  });
}

/**
 * Replaces links to local MarkDown files with links to the title
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with the links in
 * @param {string} docsPath The path to the docs folder, e.g. `../docs/`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The content with the images fixed
 */
function replaceLinks(filename,content,docsPath,version,lang) {
  // matches all links which are to local .md files
  return content.replace(avoParse.regex.linksLocalMd, function (match,text,link,anchor) {
    let filePath = filename.split("/");
    let file = filePath.pop();

    if(filePath.length) {
      // filename like 'cues/creating-a-cue.md'
      filePath = filePath.join('/');
    }
    else {
      // filename like 'cues.md'
      filePath = '';
    }

    let fullFilePath = path.resolve(docsPath, filePath, link);

    let resolvedPath = resolvePageVersion(path.join(filePath, link),version,lang)

    if (!resolvedPath) {
      // check file exists
      process.emitWarning(`[${version}] ${filename}: Link to '${link}${anchor ? anchor : ''}' not found`);

      // remove the link
      return text;
    }

    if(anchor) {
      // if it's got an anchor link to a title just go to that, e.g.
      // change [text](link.md#title)
      // to     [text](#title)
      return `[${text}](${anchor})`
    }

    // change the link to the title anchor created in replaceYaml, e.g.
    // change [text](link.md)
    // to     [text](#link-md)
    let titleLink = fullFilePath.replace(path.resolve(docsPath),"").substring(1);
    titleLink = filenameToTitleLink(titleLink);

    return `[${text}](${titleLink})`
  });
}

/**
 * Replaces the image URIs with relative path (not absolute path)
 * From ![alt](/path/to/img)
 * To   ![alt](path/to/img)
 * Also warns about missing alt text and images.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with the images in
 * @return {string} The content with the images fixed
 */
function replaceImagepath(filename,content) {
  // matches all images with local sources
  return content.replace(avoParse.regex.imagesLocal, function (match,alt,src) {
    let fullSrc = path.join(avoParse.paths.staticDir, src);
    if (!fs.existsSync(fullSrc)) {
      // check image exists
      process.emitWarning(`${filename}: Image '${src}' not found`);
      return '';
    }
    if (!alt) {
      // check alt text is defined for image
      process.emitWarning(`${filename}: No alt text set for '${src}'`);
    }
    return `![${alt}](${fullSrc})`
  });
}

/**
 * Add spacing before and after images
 * @param {string} content Contents of the .md file with the images in
 * @return {string} The content with the spacing added
 */
function addImageSpacing(content) {
  // add spacing before images that don't have it
  content = content.replace(avoParse.regex.imagesSpaceBefore,"\n\n$&");
  // add spacing after images that don't have it
  return content.replace(avoParse.regex.imagesSpaceAfter,"$&\n\n");
}

/**
 * Replace <br> tags with \newline
 * @param {string} content Contents of the .md file with the tags in
 * @return {string} The content with the breaks replaced
 */
function replaceBr(content) {
  return content.replace(/<br\/>/gmi,"&ZeroWidthSpace; \\newline &ZeroWidthSpace;");
}

/**
 * Replace key tags with normal tags
 * @param {string} content Contents of the .md file with the tags in
 * @return {string} The content with the breaks replaced
 * the additional \r for /import makes it work for files with windows-style line endings
 */
 function replaceJSX(content) {
  content = content.replace(/<Keys\.ContextKey>(.*?)<\/Keys\.ContextKey>/gmis,"{$1}");
  content = content.replace(/<Keys\.HardKey>(.*?)<\/Keys\.HardKey>/gmis,"\\\<$1\\\>");
  content = content.replace(/<Keys\.SoftKey>(.*?)<\/Keys\.SoftKey>/gmis,"\\\[$1\\\]");
  content = content.replace(/<Keys\.Annotation>(.*?)<\/Keys\.Annotation>/gmis,"($1)");
  content = content.replace(/<strong>(.*?)<\/strong>/gmis,"**$1**");
  content = content.replace(/<em>(.*?)<\/em>/gmis,"*$1*");
  content = content.replace(/import .*? from '.*?';\r?\n/gmi,""); 

  return content;
}

/**
 * Returns the path to the sidebars JSON file for the specified `version`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Relative path to the JSON file, e.g. `../website/sidebars.json`
 */
function sidebarPath(version) {
  if(version == "next") {
    return avoParse.paths.sidebar;
  }
  else {
    let filePath = path.join(avoParse.paths.versionedSideberDir,`version-${version}-sidebars.json`)

    if (!fs.existsSync(filePath)) {
      throw(`Could not find '${version}' sidebars JSON file: ${filePath}`);
    };
    return filePath;
  }
}

/**
 * Returns the path to the docs folder for the specified `version`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Absolute path to the docs folder without the trailing slash, e.g. `/Users/user/AvoDocs/docs`
 */
function docsVersionPath(version,lang) {
  if(version == "next") {
    return path.resolve("../docs/");
  }
  else {
    let filePath = path.join(avoParse.paths.versionedDocsDir,`version-${version}/`);
    if (lang != avoParse.lang){
      filePath = path.join(avoParse.paths.transDocsDir,lang,avoParse.paths.docusaurusFolder,`version-${version}/`);
    }
    if (!fs.existsSync(filePath)) {
      throw(`Could not find versioned docs: ${filePath}`)
    };
    return filePath;
  }
}

/**
 * Formats all of the MarkDown files specified in the sidebar object
 * @param {string} docsPath The path to the docs folder, e.g. `../docs/`
 * @param {object} sidebar An object of the form found in the sidebars.json files
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The concatenated formatted files
 */
function formatMdFiles(docsPath, sidebar, version, lang) {
  let output = "";
  if(version == 'next') {
    docs = sidebar.docs;
  }
  else {
    docs = sidebar[`version-${version}\/docs`];
  }

  let sectionFound = false;
  for(let index in docs) {
    let sec = docs[index].label;
    if(!section || section == sec.toLowerCase()) {
      sectionFound = true;
      for(let page of docs[index].items) {
        page = page.id.replace(`version-${version}/`,"")
        output += formatMd(docsPath,page+'.md',version,sec,lang);
      }
    }
  }

  if(!sectionFound || !output) {
    // we didn't get anything
    process.exitCode = 2;
    throw("No sections were found, this could be because of the section specified or there weren't any sections found in the sidebar");
  }

  return output;
}

/**
 * Resolves the latest version of the file
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md` 
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Absolute file path to the latest version (null if not found)
 */
function resolvePageVersion(filename,version,lang) {
  let filepath = path.resolve(docsVersionPath(version,lang), filename);
  if (fs.existsSync(filepath)) {
    return filepath;
  }
  else {
    let currentIndex = versions.indexOf(version);

    if(currentIndex == -1 || currentIndex == versions.length-1) {
      // version not in versions.json or is the last entry
      return null;
    }

    return resolvePageVersion(filename,versions[++currentIndex],lang)
  }
}

/**
 * Format a MarkDown file ready for PDF
 * @param {string} docsPath Path to the docs folder, e.g. `../docs/`
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The formatted MarkDown
 */
function formatMd(docsPath,filename,version,sectionHeading,lang) {
  let filepath = resolvePageVersion(filename,version,lang);
  if (!filepath) {
    process.emitWarning(`[${version}] ${filename}: File referenced in sidebar not found`);
    return '';
  }

  let content = fs.readFileSync(filepath, 'utf-8');

  // Replace the # headings with lower levels
  content = replaceHeadings(content);

  // replace YAML blocks with title
  content = replaceYaml(filename,content,sectionHeading);

  // replace links to md files with the title links created above
  content = replaceLinks(filename,content,docsPath,version,lang);

  // fix the absolute image path
  content = replaceImagepath(filename,content);

  // fix the absolute image path
  content = addImageSpacing(content);

  // replace <br> tags
  content = replaceBr(content);

  content = replaceJSX(content);

  content += "\n\n";

  return content;
}

/**
 * Generate a PDF version of the MarkDown file
 * @param {string} inputMdPath Path to the MD file to convert, e.g. `output/pdf.md`
 * @param {string} version Version of the manual, e.g. `12.0`
 * @param {string} version (Optional) Which section is being exported
 * @return {string} The filename of the produced PDF
 */
function generatePDF(filePath,version,section=null,options={},lang) {
  // format version name, e.g. "Titan 13.0"
  if(version == "next") {
    version = "Pre-Release";
  }
  version = `Titan ${version}`;

  // add a dash before the section if there is one specified
  section = section ? '-' + section : '';

  // current date and time
  const ISODate = new Date().toISOString().slice(0,19).replace(/[T:]/g,"-");

  // format & sanitize the filename
  let filename = `${version}-${lang}${section}-${ISODate}`;
  filename = filename.replace(/[^\w]/g,"-");
  filename += '.pdf';
  filename = path.join(options.outputDir, filename);

  // options
  options.templatePath = options.templatePath ? options.templatePath : templatePath;
  options.headerPath = options.headerPath ? options.headerPath : headerPath;
  options.logoPath = options.logoPath ? options.logoPath : logoPath;

  // default toc title
  // toc-title is a variable used by Pandoc. If not set then it is defined by the pdf engine
  // see https://stackoverflow.com/questions/20472957/how-to-change-header-contents-of-automatic-toc-when-using-pandoc
  // to make it more predictable we set it here (and a few lines down for translated languages)
  let toctitle = "Contents";
  
  if(lang == "de") {
    secfilter = sectionNumberFilterDe;
    toctitle = "Inhalt";
  }

  console.log(`Producing PDF: ${filename}`)

  const command = `
DATE=$(date "+%d %B %Y")

pandoc --template "${options.templatePath}" \
  -o "${filename}" \
  --pdf-engine=xelatex \
  --highlight-style kate \
  --metadata-file "${options.headerPath}" \
  --toc \
  --number-sections \
  -fmarkdown-implicit_figures \
  --self-contained \
  --lua-filter="${secfilter}" \
  -V fontsize=8pt \
  -M date="$DATE" \
  -M footer-center="$DATE" \
  -M footer-left="${version} Manual" \
  -M title="Avolites Titan Manual" \
  -M subtitle="${version}" \
  -M logo="${options.logoPath}" \
  -V colorlinks=true \
  -V block-headings \
  -V toc-title="${toctitle}" \
  "${filePath}"`;

  var hrstart = process.hrtime();

  execSync(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
  });

  var hrend = process.hrtime(hrstart);
  console.log('PDF produced in %ds', hrend[0]);

  return filename;
}

/**
 * Create the docs for the specified `version` & `section`
 * @param {string} version Version of the docs to produce, e.g. `12.0` or `next` to produce the latest
 * @param {string} section (Optional) Which section to output, e.g. `synergy`
 * @param {object} options (Optional) Options include:
 *  - options.legal - whether to omit the legal section (defaults to true)
 *  - options.legalPath - the path to the legal docs (defaults to legalPath)
 *  - options.outputDir - the output directory to write to
 * @return {string} The filename of the produced PDF
 */
function createPDF(version,section=null, options={}) {
  console.log(`Formatting version ${version.number} - ${version.lang}`)

  // get the path of the sidebar file
//  let sidebarFile = fs.readFileSync(sidebarPath(version));
//  let sidebar = JSON.parse(sidebarFile);

  // get the path for docs of the version
//  docsPath = docsVersionPath(version);

  let output = '';
  if (options.legal) {
    output += fs.readFileSync(options.legalPath ? options.legalPath : legalPath);
    output += "\n\n";
  }

let sidebar = JSON.parse(fs.readFileSync(version.sidebar));

  // format the files
  output += formatMdFiles(version.dir, sidebar, version.number, version.lang);
  let name = "pdf" + version.number + "-" + version.lang + ".md"
  // create formatted MD file
  let formattedMdPath = path.join(options.outputDir, name);
  try {
    fs.writeFileSync(formattedMdPath, output);
  }
  catch(err) {
    process.exitCode = 3;
    throw(`Failed to write formatted MarkDown file: ${formattedMdPath}\n${err}`);
  }

  // generate the PDF
  return generatePDF(formattedMdPath,version.number,section,options,version.lang);
}
