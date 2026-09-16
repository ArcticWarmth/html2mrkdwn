import js from '@eslint/js';
import { defineConfig } from "eslint/config";
import tseslint from 'typescript-eslint';

export default defineConfig([{
    files: ['src/*.{js,ts}'],
    ignores: ['test/*'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
    }
}]);