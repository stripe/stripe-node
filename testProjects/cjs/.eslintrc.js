module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin-import/recommended'
  ],
  rules: {
    'import/no-unresolved': [2, {commonjs: true}],
  }
};
