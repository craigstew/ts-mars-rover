import { PlateauSize } from "../types/plateauSize";

export function parsePlateauSize(rawPlateauSize: string): PlateauSize {
    const values = rawPlateauSize.trim().split(/\s+/);

    if (values.length != 2){
        throw new Error("Invalid plateau size. Must be like the following (width height)")
    }

    const width = Number((values)[0])
    const height = Number((values)[1])

    if (
        !Number.isInteger(width) ||
        !Number.isInteger(height) ||
        width <= 0 ||
        height <= 0
    ) {
        throw new Error("Invalid plateau size. Width and height must be a positive whole numbers")
    }

    return {width, height}
}