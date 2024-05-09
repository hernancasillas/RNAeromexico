module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],

        alias: {
          '@api': './src/model/api',
          '@store': './src/view-model/store',
          '@classes': './src/model/classes',
          '@constants': './src/model/constants',
          '@data': './src/model/data',
          '@types': './src/model/types',
        },
      },
    ],
  ],
};
