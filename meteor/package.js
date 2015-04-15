// package metadata file for Meteor.js
'use strict';

var packageName = 'bergie:hallo';  // http://atmospherejs.com/bergie/hallo

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: "Hallo (official): Rich text editor for contentEditable (jQuery UI)",
  version: packageJson.version,
  git: "https://github.com/bergie/hallo.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');

  api.use(['jquery'], 'client');
  api.use(['mrt:rangy', 'mizzao:jquery-ui']);
  api.imply(['mrt:rangy', 'mizzao:jquery-ui']);

  api.addFiles('dist/hallo.js', 'client');
});