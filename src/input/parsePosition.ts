import { Position } from "../types/position";
import { parseCompassDirection } from "./parseCompassDirection";

export function parsePosition(rawPosition: string): Position {
    const values = rawPosition.trim().split(/\s+/);

    if (values.length != 3){
        throw new Error("Invalid position. Must be like the following (x, y and direction)")
    }

    const x = Number((values)[0])
    const y = Number((values)[1])
    const facing = parseCompassDirection(values[2]);

    if (
        !Number.isInteger(x) || 
        !Number.isInteger(y) || 
        x < 0 || 
        y < 0
    ) {
        throw new Error("Invalid position. X and Y coordinates must be positive whole numbers")
    };

    return {x, y, facing}
}