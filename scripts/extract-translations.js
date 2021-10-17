#!/bin/env node

const fs = require("fs");
const path = require("path");
const { rootDir, processOpts, execShellCommand } = require("./_include");

const SEP = path.sep;
const srcDir = `${rootDir}${SEP}examples`;
const translationsDir = `${srcDir}${SEP}translations`;

// Issues and resolutions (on Windows systems):
//    1. Issue: Single quotes around ${srcDir}/**/*.js and [sha512...] failed.
//       Fix: Use double quotes
//   2. Issue: with backslashes the generated output file contained an empty JavaScript object ({})
//      Fix: replace backslashes (\) with forward slashes (/)
const outputFile = `${translationsDir}${SEP}en.json`;
const commandStr = "yarn extract " +
  `"${srcDir}/**/*.js*" --out-file ${outputFile} --id-interpolation-pattern "[sha512:contenthash:base64:6]"`;
const command = commandStr.replace(/\\/g, "/");

execShellCommand(command, processOpts)
  .then(stdOutErr => console.log("- Extracting translations: success!"))
  .catch(err => console.log(`Error extracting translations: ${err}`));
