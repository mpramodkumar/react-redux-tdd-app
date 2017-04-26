// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visibile.
// This is why we only use "WARNING" level for potential errors,
// and we don't use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

module.exports = {
  root: true,

  parser: 'babel-eslint',

  // import plugin is temporarily disabled, scroll below to see why
  plugins: [/*'import', */'flowtype', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  rules: {
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'camelcase': 'warn',
    'curly': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    'eol-last': 'warn',
    eqeqeq: ['warn', 'always', {'null': 'ignore'}],
    'indent': ['warn', 2, { "SwitchCase": 1 }],
    'guard-for-in': 'warn',
    'keyword-spacing': 'warn',
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-global-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': ['warn', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-multi-str': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': [
      'warn',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-negation': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'no-use-before-define': ['warn', 'nofunc'],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['warn', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'semi': 'warn',
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/

    // TODO: import rules are temporarily disabled because they don't play well
    // with how eslint-loader only checks the file you change. So if module A
    // imports module B, and B is missing a default export, the linter will
    // record this as an issue in module A. Now if you fix module B, the linter
    // will not be aware that it needs to re-lint A as well, so the error
    // will stay until the next restart, which is really confusing.

    // This is probably fixable with a patch to eslint-loader.
    // When file A is saved, we want to invalidate all files that import it
    // *and* that currently have lint errors. This should fix the problem.

    // 'import/default': 'warn',
    // 'import/export': 'warn',
    // 'import/named': 'warn',
    // 'import/namespace': 'warn',
    // 'import/no-amd': 'warn',
    // 'import/no-duplicates': 'warn',
    // 'import/no-extraneous-dependencies': 'warn',
    // 'import/no-named-as-default': 'warn',
    // 'import/no-named-as-default-member': 'warn',
    // 'import/no-unresolved': ['warn', { commonjs: true }],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-handler-names': 'warn',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': 'warn',
    'react/jsx-no-bind': ['warn', {'allowArrowFunctions': true}],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-undef': 'warn',
    'react/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-sort-props': 'warn',
    'react/jsx-space-before-closing': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/require-render-return': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/img-has-alt': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn'
  }
};
