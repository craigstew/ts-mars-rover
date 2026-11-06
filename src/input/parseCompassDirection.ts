import { COMPASSDIRECTION, CompassDirection } from "../types/compassDirection";

function isCompassDirection(value: string): value is CompassDirection {
    return COMPASSDIRECTION.includes(value as CompassDirection)
}

export function parseCompassDirection(rawCompassDirection: string): CompassDirection {
    if(isCompassDirection(rawCompassDirection)) {
        return rawCompassDirection
    }
    throw new Error("Invalid compass direction\nOnly accepts \"N\", \"E\", \"S\" and \"W\"")
}