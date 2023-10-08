import Position from "../src/valueObjects/Position";
import NorthFacing from "../src/orientation/NorthFacing";
import MarsRovers from "../src/MarsRovers";
import WestFacing from "../src/orientation/WestFacing";
import EastFacing from "../src/orientation/EastFacing";

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

	test("turn left", () => {
		const turnLeft = ['l'];
		marsRovers.applyCommands(turnLeft);

		expect(marsRovers.position).toStrictEqual(initialPosition);
		expect(marsRovers.orientation).toStrictEqual(new WestFacing());
	})

	test("turn right", () => {
		const turnRight = ['r'];
		marsRovers.applyCommands(turnRight);

		expect(marsRovers.position).toStrictEqual(initialPosition);
		expect(marsRovers.orientation).toStrictEqual(new EastFacing());
	})

	test('turn right multiple times to get the same orientation', ()=>{
		const turnRightUntilGetSameInitialOrientation = ['r','r','r','r'];
		marsRovers.applyCommands(turnRightUntilGetSameInitialOrientation);

		expect(marsRovers.position).toStrictEqual(initialPosition);
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})

	test('turn left and move forward', ()=>{
		const turnLeftAndMoveForward = ['l','f'];
		marsRovers.applyCommands(turnLeftAndMoveForward);

		expect(marsRovers.position).toStrictEqual(new Position(-1 ,0));
		expect(marsRovers.orientation).toStrictEqual(new WestFacing());
	})

	test('turn right and move backward', ()=>{
		const turnLeftAndMoveForward = ['r','b'];
		marsRovers.applyCommands(turnLeftAndMoveForward);

		expect(marsRovers.position).toStrictEqual(new Position(-1 ,0));
		expect(marsRovers.orientation).toStrictEqual(new EastFacing());
	})

	test('turn right and move forward to get the same position and orientation', ()=>{
		const moveAndGoToTheSamePosition = ['r','f','r','f','r','f','r','f'];
		marsRovers.applyCommands(moveAndGoToTheSamePosition);

		expect(marsRovers.position).toStrictEqual(initialPosition);
		expect(marsRovers.orientation).toStrictEqual(initialOrientation);
	})
})

