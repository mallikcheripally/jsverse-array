/**
 * Rotates the array elements by a given number of positions.
 *
 * @param {Array<any>} array - The array to rotate.
 * @param {number} positions - The number of positions to rotate the array by.
 * @returns {Array<any>} - The rotated array.
 * @throws {TypeError} - If the input is not an array or if positions is not a number.
 */
export default function rotate(array: any[], positions: number): any[] {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input: Expected an array.');
    }

    if (typeof positions !== 'number' || !Number.isInteger(positions)) {
        throw new TypeError('Invalid input: Expected an integer for positions.');
    }

    const length = array.length;

    if (length === 0 || positions === 0) {
        return array.slice(); // Return a shallow copy if no rotation is needed
    }

    // Normalize positions to be within array bounds
    const normalizedPositions = ((positions % length) + length) % length;

    return array.slice(-normalizedPositions).concat(array.slice(0, -normalizedPositions));
}
