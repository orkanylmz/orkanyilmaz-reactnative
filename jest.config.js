module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/jest-setup.ts",
  ],
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  moduleFileExtensions: ["js", "ts", "tsx"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|moti|react-native-reanimated)",
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
