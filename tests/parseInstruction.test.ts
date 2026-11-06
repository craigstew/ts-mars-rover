import { expect, test, describe } from "vitest";
import { parseInstructions } from "../src/input/parseInstruction";

describe("parseInstructions", () => {
  test("Test valid instruction", () => {
    expect(parseInstructions("LMMRM")).toEqual(["L", "M", "M", "R", "M"]);
  });
  test("Test invalid instruction", () => {
    expect(() => parseInstructions("LMMRQMLM")).toThrow('Instructions contain an invalid move\nOnly accepts \"R\", \"L\" and \"M\"');
  });
});