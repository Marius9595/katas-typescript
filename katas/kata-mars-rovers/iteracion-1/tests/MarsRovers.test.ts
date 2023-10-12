import fc from 'fast-check';

import Position from "../src/valueObjects/Position";
import NorthFacing from "../src/orientation/NorthFacing";
import MarsRovers from "../src/MarsRovers";

describe("Mars Rovers should",()=>{
	let initialPosition: Position;
	let initialOrientation = new NorthFacing();
	let itIsInTheInitialPositionAndOrientation: string
	let marsRovers: MarsRovers;
	beforeEach(() => {
		initialPosition = new Position(0,0);
		initialOrientation = new NorthFacing();
		itIsInTheInitialPositionAndOrientation = "0:0:N";
		marsRovers = MarsRovers.at(initialPosition, initialOrientation);
	})

	test("do nothing without commands", ()=>{
		const noCommands = [];

		const response = marsRovers.applyCommands(noCommands);

		expect(response).toBe(itIsInTheInitialPositionAndOrientation);
	})

	describe("execute the single commands:",()=>{
		test("move forward", () =>{
			const moveForward = ['f'];

			const response = marsRovers.applyCommands(moveForward);

			expect(response).toBe('0:1:N');
		})

		test("move backward", () => {
			const moveBackward = ['b'];

			const response = marsRovers.applyCommands(moveBackward);

			expect(response).toBe('0:-1:N');
		})

		test("turn left", () => {
			const turnLeft = ['l'];

			const response = marsRovers.applyCommands(turnLeft);

			expect(response).toBe('0:0:W');
		})

		test("turn right", () => {
			const turnRight = ['r'];

			const response = marsRovers.applyCommands(turnRight);

			expect(response).toBe('0:0:E');
		})
	})

	test("move forward multiple times", () => {
		const moveForwardMultipleTimes = (
			fc.array(fc.constant('f'), {minLength: 1})
		);
		fc.assert(
			fc.property(moveForwardMultipleTimes, (commands) => {
				const marsRovers = MarsRovers.at(new Position(0,0), new NorthFacing());

				const response = marsRovers.applyCommands(commands);

				const newExpectedPosition = commands.length;
				expect(response).toBe(`0:${newExpectedPosition}:N`);
			}
		))
	})

	test("move backward multiple times", () => {
		const moveBackwardMultipleTimes = ['b','b','b'];

		const response = marsRovers.applyCommands(moveBackwardMultipleTimes);

		expect(response).toBe('0:-3:N');
	})

	test('turn right multiple times to get the same orientation', ()=>{
		const turnRightUntilGetSameInitialOrientation = ['r','r','r','r'];

		const response = marsRovers.applyCommands(turnRightUntilGetSameInitialOrientation);

		expect(response).toBe(itIsInTheInitialPositionAndOrientation);
	})

	test('turn left and move forward', ()=>{
		const turnLeftAndMoveForward = ['l','f'];

		const response = marsRovers.applyCommands(turnLeftAndMoveForward);

		expect(response).toBe('-1:0:W');
	})

	test('turn right and move backward', ()=>{
		const turnLeftAndMoveForward = ['r','b'];

		const response = marsRovers.applyCommands(turnLeftAndMoveForward);

		expect(response).toBe('-1:0:E');
	})

	test('turn right and move forward to get the same position and orientation', ()=>{
		const moveAndGoToTheSamePosition = ['r','f','r','f','r','f','r','f'];

		const response = marsRovers.applyCommands(moveAndGoToTheSamePosition);

		expect(response).toBe(itIsInTheInitialPositionAndOrientation);
	})

	test('turn left and move backward to get the same position and orientation', ()=>{
		const moveAndGoToTheSamePosition = ['l','b','l','b','l','b','l','b'];

		const response = marsRovers.applyCommands(moveAndGoToTheSamePosition);

		expect(response).toBe(itIsInTheInitialPositionAndOrientation);
	})
})

