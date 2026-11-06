import { PlateauSize } from "../types/plateauSize";
import { Position } from "../types/position";

export class Plateau {
    
    constructor(private size: PlateauSize) {}

    isWithinBounds(position: Position): boolean {
        return (
            position.x >= 0 &&
            position.x <= this.size.width &&
            position.y >= 0 &&
            position.y <= this.size.height
        );
    }
}