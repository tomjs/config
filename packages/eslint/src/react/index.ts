export default {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['../index', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
