// Babel config
module.exports = (api) => {
  // Babel API
  api.cache.never();

  // Plugins
  const plugins = [];

  // Presets
  const presets = [
    '@babel/preset-env',
  ];

  return {
    plugins,
    presets,
  };
};
