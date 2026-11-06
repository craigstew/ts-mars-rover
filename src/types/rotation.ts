import { Instruction } from "./instruction";

export type Rotation = Exclude<Instruction, "M">;