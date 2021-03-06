module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'plugin:unicorn/recommended'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'off',
        },
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    'no-param-reassign': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'never',
        lib: 'never',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': ['off', 'as-needed'],
    complexity: [
      'off',
      {
        max: 11,
      },
    ],
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'dot-notation': 'error',
    'eol-last': 'off',
    'guard-for-in': 'error',
    'linebreak-style': 'off',
    'max-classes-per-file': ['off', 1],
    'max-lines': ['off', 300],
    'member-ordering': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-magic-numbers': 'error',
    'no-multiple-empty-lines': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-regex-spaces': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
      },
    ],
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    radix: 'error',
    'space-before-function-paren': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'off',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rulesDirectory: [
          'tslint-react/rules',
          'tslint-consistent-codestyle/rules',
          'tslint-microsoft-contrib',
        ],
        rules: {
          ban: true,
          'comment-format': true,
          'function-name': true,
          'jsdoc-format': true,
          'jsx-boolean-value': true,
          'jsx-key': true,
          'jsx-no-bind': true,
          'jsx-no-lambda': true,
          'jsx-no-string-ref': true,
          'jsx-self-close': true,
          'no-boolean-literal-compare': true,
          'no-duplicate-case': true,
          'no-duplicate-imports': true,
          'no-duplicate-variable': true,
          'no-else-after-return': true,
          'no-empty-character-class': true,
          'no-ex-assign': true,
          'no-extra-boolean-cast': true,
          'no-function-constructor-with-string-args': true,
          'no-implicit-dependencies': true,
          'no-increment-decrement': true,
          'no-inner-declarations': true,
          'no-reference-import': true,
          'no-shadowed-variable': true,
          'no-submodule-imports': true,
          'no-unexpected-multiline': true,
          'no-unnecessary-else': true,
          'no-unsafe-any': true,
          'no-unused-expression': true,
          'object-shorthand-properties-first': true,
          'only-arrow-functions': true,
          'ordered-imports': true,
          'prefer-array-literal': true,
          'ter-arrow-body-style': true,
          'ter-no-mixed-spaces-and-tabs': true,
          'ter-no-proto': true,
          'ter-no-script-url': true,
          'ter-no-self-compare': true,
          'ter-no-sparse-arrays': true,
          'ter-prefer-arrow-callback': true,
          'triple-equals': true,
          'valid-typeof': true,
          'variable-name': true,
        },
      },
    ],
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/tslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
};
