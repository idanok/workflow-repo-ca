/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,               // enable describe, it, beforeEach, expect globally
    environment: 'jsdom',        // needed for localStorage and DOM APIs
    include: ['tests-unit/**/*.test.js'], // only include tests in tests-unit folder
    exclude: ['node_modules', 'dist'],    // exclude unnecessary folders
    watch: false,                 // optional: disable watch mode for CI
  },
});
