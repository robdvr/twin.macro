module.exports = {
  settings: {
    version: 'detect',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'xo/browser',
    'xo/esnext',
    'xo-typescript/space',
    'xo-react/space',
    'plugin:chai-friendly/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/unicorn',
  ],
  plugins: ['chai-friendly', 'jest', 'import'],
  rules: {
    'no-unused-expressions': 0,
    'no-negated-condition': 0,
    'no-warning-comments': 0,
    'operator-assignment': 0,
    'import/no-unresolved': 0,
    'chai-friendly/no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-base-to-string': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/default-param-last': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    'react/prop-types': 0,
    'jest/prefer-expect-assertions': 0,
    'capitalized-comments': 0,
    'comma-dangle': 0,
    'import/extensions': [
      'error',
      {
        svg: 'allow',
      },
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
      },
    ],
    'unicorn/prefer-type-error': 0,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.js'],
      rules: {
        'jest/no-try-expect': 0,
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/space-before-function-paren': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
      },
    },
  ],
}
