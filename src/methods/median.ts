/**
 * Finds the median value of an array of numbers.
 *
 * @param {Array<number>} array - The array of numbers.
 * @returns {number | null} - The median value, or null if the array is empty.
 * @throws {TypeError} - If the input is not an array of numbers.
 */
export default function median(array: number[]): number | null {
    if (!Array.isArray(array) || array.some(item => typeof item !== 'number' || isNaN(item))) {
        throw new TypeError('Invalid input: Expected an array of numbers.');
    }

    if (array.length === 0) {
        return null;
    }

    const sortedArray = array.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    }
    return sortedArray[mid];
}
