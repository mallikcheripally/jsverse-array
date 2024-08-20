/**
 * Creates sub-arrays (windows) of a specified length as it moves through the array.
 *
 * @param {Array<any>} array - The array to create windows from.
 * @param {number} size - The size of each window.
 * @returns {Array<Array<any>>} - An array of sub-arrays (windows).
 * @throws {TypeError} - If the input is not an array or if size is not a positive integer.
 */
export default function slidingWindow(array: any[], size: number): any[][] {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input: Expected an array.');
    }

    if (typeof size !== 'number' || size <= 0 || !Number.isInteger(size)) {
        throw new TypeError('Invalid input: Expected a positive integer for window size.');
    }

    const result = [];
    for (let i = 0; i <= array.length - size; i++) {
        result.push(array.slice(i, i + size));
    }

    return result;
}
