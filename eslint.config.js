import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
      'import/resolver': {
        alias: {
          map: [
            ['babel-polyfill', 'babel-polyfill/dist/polyfill.min.js'],
            ['helper', './utils/helper'],
            ['material-ui/DatePicker', '../custom/DatePicker'],
            ['material-ui', 'material-ui-ie10']
          ],
          extensions: ['.ts', '.js', '.jsx', '.json']
        }
      },
      'import/extensions': ['.js', '.jsx'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/no-unresolved': ['error', { 'commonjs': true, 'amd': true }],
      'quotes': ['error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }],
      'sort-imports': ['error', { 'ignoreCase': true, 'ignoreDeclarationSort': true }],
    },
  },
]