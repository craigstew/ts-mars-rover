import { Position } from "../types/position";
import { Rotation } from "../types/rotation";
import { CompassDirection } from "../types/compassDirection";

const rightTurn: Record <CompassDirection, CompassDirection> ={
    N: "E", E: "S", S: "W", W: "N"
}

const leftTurn: Record <CompassDirection, CompassDirection> ={
    N: "W", W: "S", S: "E", E: "N"
}

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
    if(rotation === "R") {
        this.position = {...this.position, facing: rightTurn[this.position.facing]}
    } else {
        this.position = {...this.position, facing: leftTurn[this.position.facing]}
    }
  }

  moveForward(): void {
    switch(this.position.facing) {
        case "N":
            this.position = {...this.position, y: this.position.y + 1}
            break;
        case "E":
            this.position = {...this.position, x: this.position.x + 1}
            break;
        case "S":
            this.position = {...this.position, y: this.position.y - 1}
            break;
        case "W":
            this.position = {...this.position, x: this.position.x - 1}
            break;
    }
  }
}