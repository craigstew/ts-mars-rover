import { expect, test, describe } from "vitest";
import { parsePlateauSize } from "../src/input/parsePlateauSize";

describe("parsePlateauSize", () => {
  test("Test valid plateau size", () => {
    expect(parsePlateauSize("5 6")).toEqual({width: 5, height: 6});
  });
  test("Test invalid plateau size", () => {
    expect(() => parsePlateauSize("5")).toThrow("Invalid plateau size. Must be like the following (width height)");
  });
  test("Test invalid plateau size two", () => {
    expect(() => parsePlateauSize("5 -5")).toThrow("Invalid plateau size. Width and height must be a positive whole numbers");
  });

});