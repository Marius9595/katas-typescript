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

