import Position from "../src/valueObjects/Position";
import NorthFacing from "../src/orientation/NorthFacing";
import MarsRovers from "../src/MarsRovers";

describe("Mars Rovers should",()=>{
	test("do nothing without commands", ()=>{
		const initialPosition = new Position(0,0);
		const initialOrientation = new NorthFacing();
		const marsRovers = MarsRovers.at(initialPosition, initialOrientation);

		const noCommands = [];
		marsRovers.applyCommands(noCommands);

		expect(marsRovers.position).toStrictEqual(initialPosition);
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test("move forward", () =>{
		const initialPosition = new Position(0,0);
		const initialOrientation = new NorthFacing();
		const marsRovers = MarsRovers.at(initialPosition, initialOrientation);

		const moveForward = ['f'];
		marsRovers.applyCommands(moveForward);

		expect(marsRovers.position).toStrictEqual(new Position(0,1));
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test("move backward", () => {
		const initialPosition = new Position(0,0);
		const initialOrientation = new NorthFacing();
		const marsRovers = MarsRovers.at(initialPosition, initialOrientation);

		const moveBackward = ['b'];
		marsRovers.applyCommands(moveBackward);

		expect(marsRovers.position).toStrictEqual(new Position(0,-1));
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})
})

