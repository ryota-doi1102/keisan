/** @type import('stylelint').Configuration */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
  },
};
