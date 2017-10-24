Package.describe({
  name: 'andrewvanbeek-okta:accounts-okta',
  version: '0.0.1',
  summary: 'OAuth2 for Imgur',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);

  api.use('andrewvanbeek-okta:okta-oauth@1.2.0', ['client', 'server']);
  api.imply('andrewvanbeek-okta:okta-oauth@1.2.0', ['client', 'server']);
  api.addFiles('accounts-okta.js');
});
