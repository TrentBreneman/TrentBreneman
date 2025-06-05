module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true }, // Add node environment for Vite config files etc.
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Ensures Prettier rules are applied last
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'], // Ignore build folder and config itself
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Point to your tsconfig for type-aware linting
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+ JSX transform
    'react/jsx-no-target-blank': 'off', // Allows target="_blank" without rel="noreferrer" - consider adding rel="noreferrer" for security
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Optional: Add more specific rules or overrides here
    // For example, if you want semicolons always:
    // 'prettier/prettier': ['error', { semi: true }]
  },
  // Add a specific override to ensure Prettier rules are correctly picked up for .tsx files
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
};``