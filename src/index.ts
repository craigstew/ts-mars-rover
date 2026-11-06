import { parseInstruction } from "../src/input/parseInstruction";
import { parseCompassDirection } from "../src/input/parseCompassDirection";
import { parsePlateauSize } from "../src/input/parsePlateauSize";
import { parsePosition } from "../src/input/parsePosition"

const setSize = parsePlateauSize("5 5");

const setPos1 = parsePosition("1 2 N")
const instruction_one = parseInstruction("LMLMLMLMM")

const setPos2 = parsePosition("3 3 E")
const instruction_two = parseInstruction("MMRMMRMRRM")

console.log("Plateau size:", setSize);

console.log("Rover 1 position:", setPos1);
console.log("Rover 1 instructions:", instruction_one);

console.log("Rover 2 position:", setPos2);
console.log("Rover 2 instructions:", instruction_two);




