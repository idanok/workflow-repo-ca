/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,        // <- enables describe, it, beforeEach, expect globally
    environment: 'jsdom', // <- needed for localStorage
    include: ['**/*.test.js'] // <- optional, ensures only test files are picked
  },
});
