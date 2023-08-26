module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    semi: 'off',
  },
};
