import Position from "../src/valueObjects/Position";
import NorthFacing from "../src/orientation/NorthFacing";
import MarsRovers from "../src/MarsRovers";

describe("Mars Rovers should",()=>{
	let initialPosition: Position;
	let initialOrientation = new NorthFacing();
	let marsRovers: MarsRovers;
	beforeEach(() => {
		initialPosition = new Position(0,0);
		initialOrientation = new NorthFacing();
		marsRovers = MarsRovers.at(initialPosition, initialOrientation);
	})

	test("do nothing without commands", ()=>{
		const noCommands = [];
		marsRovers.applyCommands(noCommands);

		expect(marsRovers.position).toStrictEqual(initialPosition);
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test("move forward", () =>{
		const moveForward = ['f'];
		marsRovers.applyCommands(moveForward);

		expect(marsRovers.position).toStrictEqual(new Position(0,1));
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test("move backward", () => {
		const moveBackward = ['b'];
		marsRovers.applyCommands(moveBackward);

		expect(marsRovers.position).toStrictEqual(new Position(0,-1));
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test("move forward multiple times", () => {
		const moveForwardMultipleTimes = ['f','f','f'];
		marsRovers.applyCommands(moveForwardMultipleTimes);

		expect(marsRovers.position).toStrictEqual(new Position(0,moveForwardMultipleTimes.length));
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test("move backward multiple times", () => {
		const moveBackwardMultipleTimes = ['b','b','b'];
		marsRovers.applyCommands(moveBackwardMultipleTimes);

		expect(marsRovers.position).toStrictEqual(new Position(0, -moveBackwardMultipleTimes.length));
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})
})

