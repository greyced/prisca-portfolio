const { composePlugins, withNx } = require('@nx/webpack');

module.exports = composePlugins(withNx(), (config) => {
  return {
    ...config,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
  };
}); 