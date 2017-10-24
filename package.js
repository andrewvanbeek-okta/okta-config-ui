Package.describe({
  name: 'andrewvanbeek-okta:okta-config-ui',
  version: '0.0.1',
  summary: 'OAuth2 for Imgur',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('templating@1.2.13', 'client');
  api.addFiles('okta_login_button.css', 'client');
  api.addFiles(
    ['okta_configure.html', 'okta_configure.js'],
    'client'
  );
});

