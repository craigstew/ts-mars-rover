import { Position } from "../types/position";
import { Rotation } from "../types/rotation";

export class Rover {
  readonly name: string;
  private position: Position;

  constructor(name: string, startingPosition: Position) {
    this.name = name;
    this.position = startingPosition;
  }

  getPosition(): Position {
    return this.position;
  }

  rotate(rotation: Rotation): void {
    // work out the new direction, then update this.position
  }
}