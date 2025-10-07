# Workflow repo for the CA

## 🎯 Goal
The goal of this assignment is to apply what I have learned in the workflow course to upper the quality of a website. This project focuses on configuring development tools and creating automated tests to improve the speed, reliability, and overall efficiency of the development workflow.

## 🧠 Learning Outcomes
- Understand and use modern JavaScript productivity tools
- Create and configure meaningful tests to validate functionality
- Collaborate via pull requests and peer review
- Automate code quality checks with ESLint, Prettier, and Husky
- Plan and execute both unit tests and E2E tests

## 🛠️ Setup
1. Clone the repository
git clone <your-forked-repo-url>
cd workflow-repo-ca
2. Install dependencies
npm install
3. Start the development environment
npm run dev

## 🧪 Testing
The project uses Vitest for unit testing.
Run all unit tests:
npm run test
### Unit tests cover:
### isActivePath()
- Returns true when the current path matches href
- Returns true for root path ("/" or "/index.html")
- Returns true when current path includes href
- Returns false when paths don’t match
### getUserName()
- Returns username from stored user object
- Returns null when no user exists in storage

## 🌐 End-to-End Tests (Playwright)
The project uses Playwright for E2E browser testing.
### Run all E2E tests:
npm run test:e2e
### Or run a specific test:
npx playwright test tests-e2e/login.spec.js
npx playwright test tests-e2e/navigation.spec.js

### E2E tests cover:
### Login
- User can log in successfully with valid credentials from environment variables
- User sees an error message when using invalid credentials
### Navigation
- Navigates to the home page
- Waits for the venue list to load
- Clicks the first venue
- Verifies that the details page contains the heading “Venue details”

## ⚙️ Scripts Overview
npm run dev- Runs Tailwind CSS in watch mode
npm run test- Runs Vitest unit tests
npm run test:e2e- Runs Playwright end-to-end tests
npm run lint- Runs ESLint checks (if configured)
npm run format- Runs Prettier formatting (if configured)

## 🧩 Tools and Configuration
ESLint – for linting JavaScript files
Prettier – for automatic code formatting
Husky + lint-staged – for pre-commit checks
Vitest – for unit testing
Playwright – for end-to-end testing
Tailwind CSS – for styling

Pre-commit hooks automatically:
- Lint and format staged .js files
- Format .html files

## 🔐 Environment Variables
### .env: Used for secure login credentials during E2E testing
TEST_EMAIL=noroff.email@stud.noroff.no
TEST_PASSWORD=yourpassword

### .env.example
Include this file in the repo (without actual values):
TEST_EMAIL=
TEST_PASSWORD=

### .gitignore
Make sure .env is excluded from version control:
.env 

## 🚀 How to Submit
1. Create a new branch named workflow
2. Commit and push all your configuration, tests, and updated README
3. Open a Pull Request (PR) from workflow → main
4. Do not merge it
5. Submit the PR link on Moodle

## 🧾 Grading Criteria
- Eslint is installed and configured to handle test globals
- Prettier is installed and configured
- Pre-commit hooks have been set up to handle linting and formatting
- Vitest has been installed and configured
- The relevant unit tests have been written and pass
- Playwright has been installed and configured
- The relevant e2e tests have been written and pass
- The README has been updated with the relevant scripts and environment variable examples
- .env is in .gitignore
- There is a .env.example file in the branch
