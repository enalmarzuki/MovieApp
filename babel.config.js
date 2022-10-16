module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
