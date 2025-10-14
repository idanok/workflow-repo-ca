import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Load environment variables from .env
const envPath = fs.existsSync(path.resolve(".env.local"))
? ".env.local"
: ".env";
dotenv.config({ path: envPath });

// Automatically detect the dev server port
const DEV_PORT = process.env.VITE_PORT || 5174;

export default defineConfig({
use: {
    baseURL: `http://localhost:${DEV_PORT}`,
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
},
// Optional: start dev server automatically before E2E tests
webServer: {
    command: `npm run dev`,
    port: DEV_PORT,
    reuseExistingServer: true,
    timeout: 120 * 1000,
},
});
