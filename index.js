exports.build = function(dir) {
  var
    _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    requirer = require('./lib/requirer'),
    config = {},
    files = fs.readdirSync(dir);

  files.forEach(function(file) {
    if(/.*\.json$/.test(file)) {
      var file_path = path.join(process.cwd(), dir, file);
      config[_.trim(file, '.json')] = requirer.require(file_path);
    }
  });
  return config;
};
