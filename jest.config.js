module.exports = {
  rootDir: ".",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!./src/**/*.test.{ts,tsx}",
    "!**/node_modules/**",
    "!**/dist/**",
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
