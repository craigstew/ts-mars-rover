import { INSTRUCTIONS, Instruction } from "../types/instruction";

function isInstruction(value: string): value is Instruction {
    if(!INSTRUCTIONS.includes(value as Instruction)){
        throw new Error("Instructions contain an invalid move\nOnly accepts \"R\", \"L\" and \"M\"")
    }
    return true
}

export function parseInstruction(rawInstructions: string): Instruction[] {
    return rawInstructions
        .split("")
        .filter(isInstruction);
}