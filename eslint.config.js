// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Enforce type aliases over interfaces
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  // Disables any conflicting rules so Prettier handles spacing and indentation entirely
  eslintConfigPrettier,
]);