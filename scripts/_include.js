const path = require("path");
const cp = require("child_process");

const rootDir = path.resolve(__dirname, ".."); // path.resolve(__dirname, "..", "..");
const processOpts = {
  encoding: "utf-8"
};

module.exports = {
  rootDir,
  processOpts,
  execShellCommand
};


/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string} required
 * @param options {object} optional
 * @return {Promise<string>}
 */
function execShellCommand(cmd, options) {
  return new Promise((resolve, reject) => {
    cp.exec(cmd, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }

      resolve(stdout ? stdout : stderr);
    });
  });
}
