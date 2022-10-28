// vim: expandtab:ts=2:sw=2

var
  fs = require('fs');

module.exports.readJsonConfig = function readJsonConfig(path) {
  var contents = fs.readFileSync(path);
  return JSON.parse(contents);
};

module.exports.rimraf = (f, callback) => {
  fs.rm(f, { force: true, recursive: true, maxRetries : 3}, callback);
};

module.exports.rimraf.sync = (f) => {
  fs.rmSync(f, { force: true, recursive: true, maxRetries: 3});
};
