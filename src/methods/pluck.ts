/**
 * Extracts values from a specific property of each object in an array.
 *
 * @param {Array<Record<string, any>>} array - The array of objects to pluck values from.
 * @param {string} key - The key of the property to extract.
 * @returns {Array<any>} - An array containing the values of the specified property from each object.
 * @throws {TypeError} - If the input is not an array of objects or if the key is not a string.
 */
export function pluck(array: Array<Record<string, any>>, key: string): Array<any> {
    if (!Array.isArray(array)) {
        throw new TypeError('The first argument must be an array.');
    }
    if (typeof key !== 'string') {
        throw new TypeError('The key must be a string.');
    }

    return array.map(obj => (obj && typeof obj === 'object' && key in obj ? obj[key] : null));
}
