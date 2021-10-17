#!/bin/env node

const fs = require("fs");
const path = require("path");
const { rootDir, processOpts, execShellCommand } = require("./_include");

const SEP = path.sep;
const srcDir = `${rootDir}${SEP}examples`;
const translationsDir = `${srcDir}${SEP}translations`;
const translationFiles = fs.readdirSync(translationsDir);

for(let i = 0; i < translationFiles.length; i++) {
  const currFile = translationFiles[i];
  const isDir = fs.statSync(`${translationsDir}/${currFile}`).isDirectory();

  // Ignore directories (and the inex.js file)
  if(isDir || currFile === "index.js") {
    continue;
  }

  //const fileName = path.basename(translationFiles[i], '.json');
  const inputFile = `${translationsDir}${SEP}${currFile}`;
  const outputFile = `${translationsDir}${SEP}compiled${SEP}${currFile}`;
  const commandStr = `yarn compile ${inputFile} --ast --out-file ${outputFile}`;

  // (on Windows sysetms), replace backslashes (\) with forward slashes
  // otherwise the command will fail with "input file not found"
  const command = commandStr.replace(/\\/g, "/");

  execShellCommand(command, processOpts)
    .then(stdOutErr => console.log(`- Compiling file "${currFile}...": success!`))
    .catch(err => console.log(`Error compiling translation files: ${err}`));
}
