import { Position } from "../types/position";
import { Rotation } from "../types/rotation";
import { CompassDirection } from "../types/compassDirection";
import { Plateau } from "./plateau";

const rightTurn: Record <CompassDirection, CompassDirection> ={
    N: "E", E: "S", S: "W", W: "N"
}

const leftTurn: Record <CompassDirection, CompassDirection> ={
    N: "W", W: "S", S: "E", E: "N"
}

export class Rover {
    readonly name: string;
    private position: Position;

    constructor(name: string, startingPosition: Position, private plateau: Plateau) {
        this.name = name;
        this.position = startingPosition;

        if (!this.plateau.isWithinBounds(startingPosition)) {
            throw new Error("Rover starting position is outside the plateau!");
        }
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
    let newPosition: Position;

    switch(this.position.facing) {
        case "N":
            newPosition = {...this.position, y: this.position.y + 1}
            break;
        case "E":
            newPosition = {...this.position, x: this.position.x + 1}
            break;
        case "S":
            newPosition = {...this.position, y: this.position.y - 1}
            break;
        case "W":
            newPosition = {...this.position, x: this.position.x - 1}
            break;
    }
    if (this.plateau.isWithinBounds(newPosition)) {
        this.position = newPosition;
    }
    else {
        throw new Error("Rover has left the restricted plateau zone!")
    }
  }
}