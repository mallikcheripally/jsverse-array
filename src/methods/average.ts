/**
 * Computes the average value of a numeric array.
 *
 * @param {Array<number>} array - The array of numbers to average.
 * @returns {number | null} - The average value, or null if the array is empty.
 * @throws {TypeError} - If the input is not an array of numbers.
 */
export default function average(array: number[]): number | null {
    if (!Array.isArray(array) || array.some(item => typeof item !== 'number' || isNaN(item))) {
        throw new TypeError('Invalid input: Expected an array of numbers.');
    }

    if (array.length === 0) {
        return null;
    }

    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
}
