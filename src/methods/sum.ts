/**
 * Calculates the sum of all elements in a numeric array.
 *
 * @param {Array<number>} array - The array of numbers to sum.
 * @returns {number} - The sum of all elements in the array.
 * @throws {TypeError} - If the input is not an array of numbers.
 */
export default function sum(array: number[]): number {
    if (!Array.isArray(array) || array.some(item => typeof item !== 'number' || isNaN(item))) {
        throw new TypeError('Invalid input: Expected an array of numbers.');
    }

    return array.reduce((acc, curr) => acc + curr, 0);
}
