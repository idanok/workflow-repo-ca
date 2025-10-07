import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load .env.local if it exists, otherwise fallback to .env
const envPath = fs.existsSync(path.resolve('.env.local')) ? '.env.local' : '.env';
dotenv.config({ path: envPath });

export default defineConfig({
  use: {
    baseURL: process.env.VITE_API_URL || 'http://localhost:3000',
    headless: false, // show browser for debugging
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});
