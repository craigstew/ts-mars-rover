import { CompassDirection } from "./compassDirection";

export interface Position {
    readonly x: number;
    readonly y: number;
    readonly facing: CompassDirection;
}