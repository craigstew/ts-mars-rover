import { expect, test, describe } from "vitest";
import { Rover } from "../rover";

describe("rover", () => {
  test("Turning right when facing north, results in facing east", () => {
    const rover = new Rover("Rover-1", {x: 1, y: 2, facing: "N"});

    rover.rotate("R");

    expect(rover.getPosition().facing).toBe("E")
  });
  test("Turning right when facing south, results in facing west", () => {
    const rover = new Rover("Rover-2", {x: 2, y: 3, facing: "S"});

    rover.rotate("R");

    expect(rover.getPosition().facing).toBe("W")
  });
  test("Turning left when facing north, results in facing west", () => {
    const rover = new Rover("Rover-3", {x: 4, y: 2, facing: "N"});

    rover.rotate("L");

    expect(rover.getPosition().facing).toBe("W")
  });
  test("Turning left when facing south, results in facing east", () => {
    const rover = new Rover("Rover-3", {x: 2, y: 2, facing: "S"});

    rover.rotate("L");

    expect(rover.getPosition().facing).toBe("E")
  });
});