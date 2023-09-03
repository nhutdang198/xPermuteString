// Import the xPermuteString function
import { xPermuteString } from './xPermuteString.ts';

describe('xPermuteString', () => {
  it('should return an array with case permutations of "Hello"', () => {
    const input = 'Hello';
    const expectedOutput = [
      'hello', 'hellO', 'helLo', 'helLO',
      'heLlo', 'heLlO', 'heLLo', 'heLLO',
      'hEllo', 'hEllO', 'hElLo', 'hElLO',
      'hELlo', 'hELlO', 'hELLo', 'hELLO',
      'Hello', 'HellO', 'HelLo', 'HelLO',
      'HeLlo', 'HeLlO', 'HeLLo', 'HeLLO',
      'HEllo', 'HEllO', 'HElLo', 'HElLO',
      'HELlo', 'HELlO', 'HELLo', 'HELLO'];

    const result = xPermuteString(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array when given an empty string', () => {
    const input = '';
    const expectedOutput: string[] = [];

    const result = xPermuteString(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an array with a single element when given a single-character string', () => {
    const input = 'a';
    const expectedOutput = ['a', "A"];

    const result = xPermuteString(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle input with uppercase letters', () => {
    const input = 'AbCd';
    const expectedOutput = [
      'abcd', 'abcD', 'abCd',
      'abCD', 'aBcd', 'aBcD',
      'aBCd', 'aBCD', 'Abcd',
      'AbcD', 'AbCd', 'AbCD',
      'ABcd', 'ABcD', 'ABCd',
      'ABCD'];

    const result = xPermuteString(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle input with special characters', () => {
    const input = '!@#';
    const expectedOutput = ['!@#'];

    const result = xPermuteString(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should execute within a reasonable time for a large input', () => {
    const input = 'abcdefghijklmnopqrstuvwxy'; // Create a large input string (260 characters)

    // Mock console.log to measure execution time
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    // Measure execution time
    const startTime = Date.now();
    xPermuteString(input);
    const endTime = Date.now();

    const executionTime = endTime - startTime;

    // Adjust the threshold based on your performance expectations
    const thresholdMilliseconds = 17000; // Set a reasonable threshold (e.g., 100ms)

    expect(executionTime).toBeLessThan(thresholdMilliseconds);

    // Restore the original console.log function
    consoleLogSpy.mockRestore();
  });

});
