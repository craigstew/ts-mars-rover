import { parseInstructions } from "../src/input/parseInstruction";
import { parseCompassDirection } from "../src/input/parseCompassDirection";
import { parsePlateauSize } from "../src/input/parsePlateauSize";
import { parsePosition } from "../src/input/parsePosition"

console.log(parseInstructions("LRLM"));
console.log(parseCompassDirection("N"));
console.log(parsePlateauSize("6 5"))
console.log(parsePosition("2 3 N"))