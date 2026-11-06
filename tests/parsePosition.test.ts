import { expect, test, describe } from "vitest";
import { parsePosition } from "../src/input/parsePosition";

describe("parsePosition", () => {
  test("Test valid position", () => {
    expect(parsePosition("2 2 W")).toEqual({x: 2, y: 2, facing: "W"});
  });
  test("Test invalid position", () => {
    expect(() => parsePosition("2 W")).toThrow("Invalid position. Must be like the following (x, y and direction)");
  });
  test("Test invalid position two", () => {
    expect(() => parsePosition("2 -2 E")).toThrow("Invalid position. X and Y coordinates must be positive whole numbers");
  });
});