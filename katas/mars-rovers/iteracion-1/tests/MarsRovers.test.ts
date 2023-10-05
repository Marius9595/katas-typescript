import { marsRovers } from '../src/./MarsRovers';

test('should marsRovers two numbers', () => {
	const result = marsRovers(1, 2);
	const expected = 3;

	expect(result).toBe(expected);
});
