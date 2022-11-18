// react-hook form setup for testing
import "@testing-library/jest-dom";

// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;

jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);
