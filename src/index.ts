const INSTRUCTIONS = ["L", "R", "M"] as const;
type Instruction = (typeof INSTRUCTIONS)[number];

const COMPASSDIRECTION = ["N", "E", "S", "W"] as const;
type CompassDirection = (typeof COMPASSDIRECTION)[number];
