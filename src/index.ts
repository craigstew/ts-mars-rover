import { Rover } from "../src/logic/rover"

const rover = new Rover("Mars Rover", {x: 2, y: 3, facing: "N"})

rover.moveForward()
rover.rotate("R")
rover.moveForward()
rover.moveForward()
rover.rotate("L")
rover.moveForward()

console.log("Mars Rover Should Now Be Located at:\nX: 4, Y: 5, Facing: N")
console.log(rover.getPosition())



