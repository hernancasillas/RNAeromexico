module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
