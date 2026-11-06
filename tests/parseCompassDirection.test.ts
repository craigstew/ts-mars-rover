import { expect, test, describe } from "vitest";
import { parseCompassDirection } from "../src/input/parseCompassDirection";

describe("parseCompassDirection", () => {
  test("Test valid compass direction", () => {
    expect(parseCompassDirection("N")).toEqual("N");
  });
  test("Test invalid compass direction", () => {
    expect(() => parseCompassDirection("J")).toThrow('Invalid compass direction\nOnly accepts "N", "E", "S" and "W"');
  });
});