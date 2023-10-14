import fc from 'fast-check';

import Position from "../src/valueObjects/Position";
import MarsRovers from "../src/MarsRovers";
import Grid from "../src/Grid";

describe("Mars Rovers should",()=>{
	let itIsInTheInitialPositionAndOrientation: string
	let marsRovers: MarsRovers;
	beforeEach(() => {
		itIsInTheInitialPositionAndOrientation = "0:0:N";
		marsRovers = MarsRovers.in(new Grid());
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

			expect(response).toBe('0:9:N');
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

	test('wrap around the end of the grid when is moving to forward until its edge', () =>{
		const moveToTheEdgeOfTheGrid = ['f','f','f','f','f','f','f','f','f','f'];

		const response = marsRovers.applyCommands(moveToTheEdgeOfTheGrid);

		expect(response).toBe(itIsInTheInitialPositionAndOrientation);
	})

	test('wrap around the end of the grid when is moving to backward until its edge', () =>{
		const moveToTheEdgeOfTheGrid = ['b'];

		const response = marsRovers.applyCommands(moveToTheEdgeOfTheGrid);

		expect(response).toBe('0:9:N');
	})

	test('move inside of grid',()=>{
		const commands = (
			fc.array(
				fc.constantFrom('f', 'b', 'l', 'r'),
				{minLength: 1}
			)
		);

		fc.assert(
			fc.property(commands, (commands) => {
				const marsRovers = MarsRovers.in(new Grid());

				const response = marsRovers.applyCommands(commands);

				expect(response).toMatch(/^[0-9]:[0-9]:[N|S|E|W]$/);
			})
		)
	})


	test("move forward multiple times", () => {
		const moveForwardMultipleTimes = (
			fc.array(fc.constant('f'), {minLength: 1, maxLength: 9})
		);
		fc.assert(
			fc.property(moveForwardMultipleTimes, (commands) => {
				const marsRovers = MarsRovers.in(new Grid());

				const response = marsRovers.applyCommands(commands);

				const newExpectedPosition = commands.length;
				expect(response).toBe(`0:${newExpectedPosition}:N`);
			}
		))
	})

	test('turn right multiple times to get the same orientation', ()=>{
		const turnRightUntilGetSameInitialOrientation = ['r','r','r','r'];

		const response = marsRovers.applyCommands(turnRightUntilGetSameInitialOrientation);

		expect(response).toBe(itIsInTheInitialPositionAndOrientation);
	})

	test('turn left and move forward', ()=>{
		const turnLeftAndMoveForward = ['l','f'];

		const response = marsRovers.applyCommands(turnLeftAndMoveForward);

		expect(response).toBe('9:0:W');
	})

	test('turn right and move backward', ()=>{
		const turnLeftAndMoveForward = ['r','b'];

		const response = marsRovers.applyCommands(turnLeftAndMoveForward);

		expect(response).toBe('9:0:E');
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

	test('detect obstacles when is moving to a forward position and report its last position', ()=>{
		const obstacles = [new Position(0,2)];
		const marsRovers = MarsRovers.in(new Grid(obstacles));
		const moveForwardMultipleTimes = ['f','f','f'];

		const response = marsRovers.applyCommands(moveForwardMultipleTimes);

		expect(response).toBe('O:0:1:N');
	})

	test('detect obstacles when is moving to a backward position and report its last position', ()=>{
		const obstacles = [new Position(0,8)];
		const marsRovers = MarsRovers.in(new Grid(obstacles));
		const moveForwardMultipleTimes = ['b','b','b'];

		const response = marsRovers.applyCommands(moveForwardMultipleTimes);

		expect(response).toBe('O:0:9:N');
	})
})

