export const COMPASSDIRECTION = ["N", "E", "S", "W"] as const;
export type CompassDirection = (typeof COMPASSDIRECTION)[number];
