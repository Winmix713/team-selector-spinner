module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: '@babel/eslint-parser', // vagy '@typescript-eslint/parser' TypeScript esetén
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript esetén
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'no-undef': 'off',
  },
};