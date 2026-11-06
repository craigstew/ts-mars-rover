import { expect, test, describe } from "vitest";
import { parseInstruction } from "../src/input/parseInstruction";

describe("parseInstructions", () => {
  test("Test valid instruction", () => {
    expect(parseInstruction("LMMRM")).toEqual(["L", "M", "M", "R", "M"]);
  });
  test("Test invalid instruction", () => {
    expect(() => parseInstruction("LMMRQMLM")).toThrow('Instructions contain an invalid move\nOnly accepts \"R\", \"L\" and \"M\"');
  });
});