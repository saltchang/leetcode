module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/eslint-recommended', // typescript
    'plugin:@typescript-eslint/recommended', // typescript
    'prettier', // prettier
    'plugin:prettier/recommended', // prettier
    'plugin:jest/recommended', // jest
    'plugin:unicorn/recommended', // unicorn
    'plugin:import/errors', // import
    'plugin:import/warnings', // import
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        'babel.config.js',
        '.huskyrc.js',
        '.lintstagedrc.js',
      ],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'unicorn', 'import'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        vars: 'all',
      },
    ],
    eqeqeq: ['error', 'smart'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': 'warn',
    'no-unused-vars': 'off',
    'prefer-const': ['error'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'unicorn/filename-case': [
      'error',
      {
        case: 'snakeCase',
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-for-loop': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    jest: {
      version: 27,
    },
  },
};
