Package.describe({
  name: 'arillo:hallo',
  summary: "Hallo (official): Rich text editor for contentEditable (jQuery UI)",
  version: "1.1.1",
  git: "https://github.com/arillo/hallo.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');

  api.use(['jquery'], 'client');
  api.use(['mrt:rangy', 'mizzao:jquery-ui']);
  api.imply(['mrt:rangy', 'mizzao:jquery-ui']);

  api.addFiles('dist/hallo.js', 'client');
});