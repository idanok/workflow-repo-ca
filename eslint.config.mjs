import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript & React
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules/**", "*.css", "*.html", "*.md"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: { js, react: pluginReact },
    rules: {
      "react/display-name": "off",
      "react/prop-types": "off", // optional
    },
  },

  // JSON
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    rules: {},
  },

  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    rules: {},
  },

  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    rules: {},
  },

  // Markdown
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    rules: {},
  },

  // CSS
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    rules: {},
  },
]);
