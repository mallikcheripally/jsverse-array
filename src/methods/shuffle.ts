/**
 * Randomly shuffles the elements of an array and returns a new array.
 *
 * @param {Array<any>} array - The array to shuffle.
 * @returns {Array<any>} - A new array with shuffled elements.
 * @throws {TypeError} - If the input is not an array.
 */
export default function shuffle(array: any[]): any[] {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input: Expected an array.');
    }

    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}
