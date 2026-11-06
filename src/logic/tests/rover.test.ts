import { expect, test, describe } from "vitest";
import { Rover } from "../rover";
import { Plateau } from "../plateau";

describe("rover direction changes", () => {
  test("Turning right when facing north, results in facing east", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-1", {x: 1, y: 2, facing: "N"}, plateau);

    rover.rotate("R");

    expect(rover.getPosition().facing).toBe("E")
  });
  test("Turning right when facing south, results in facing west", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-2", {x: 2, y: 3, facing: "S"}, plateau);

    rover.rotate("R");

    expect(rover.getPosition().facing).toBe("W")
  });
  test("Turning left when facing north, results in facing west", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-3", {x: 4, y: 2, facing: "N"}, plateau);

    rover.rotate("L");

    expect(rover.getPosition().facing).toBe("W")
  });
  test("Turning left when facing south, results in facing east", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-3", {x: 2, y: 2, facing: "S"}, plateau);

    rover.rotate("L");

    expect(rover.getPosition().facing).toBe("E")
  });
});

describe("rover moving", () => {
  test("Moving forward facing north", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-1", {x: 1, y: 2, facing: "N"}, plateau);

    rover.moveForward();

    expect(rover.getPosition()).toEqual({x: 1, y: 3, facing: "N"})
  });
  test("Moving forward facing east", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-2", {x: 2, y: 4, facing: "E"}, plateau);

    rover.moveForward();

    expect(rover.getPosition()).toEqual({x: 3, y: 4, facing: "E"})
  });
  test("Moving forward facing south", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-3", {x: 2, y: 4, facing: "S"}, plateau);

    rover.moveForward();

    expect(rover.getPosition()).toEqual({x: 2, y: 3, facing: "S"})
  });
  test("Moving forward facing west", () => {
    const plateau = new Plateau({width: 10, height: 10})
    const rover = new Rover("Rover-4", {x: 2, y: 4, facing: "W"}, plateau);

    rover.moveForward();

    expect(rover.getPosition()).toEqual({x: 1, y: 4, facing: "W"})
  });
});