module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'babel',
    'vue'
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  rules: {
    'prefer-const': 'error',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    'vue/html-indent': [
      'warn',
      2,
      {
        alignAttributesVertically: false
      }],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1, switchCase: 1 }
    ],
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/component-definition-name-casing': 0,
    'vue/no-v-html': 0,
    complexity: [1, 10],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
