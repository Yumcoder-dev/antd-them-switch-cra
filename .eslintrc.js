module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['**/*.stories.js', '**/*.stories.jsx'] },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
        ['@js', './src/js'],
        ['@pages', './src/pages'],
        ['@components', './src/components'],
        ['@locales', './src/locales/i18n'],
      ],
    },
  },
};
