/**
 * Returns a new array with only unique elements, removing duplicates.
 * Performs deep comparison for objects and arrays.
 *
 * @param {Array<any>} array - The array to filter for unique elements.
 * @returns {Array<any>} - A new array with only unique elements.
 * @throws {TypeError} - If the input is not an array.
 */
export default function unique(array: any[]): any[] {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input: Expected an array.');
    }

    const result: any[] = [];
    const map = new Map<string, boolean>();

    for (const item of array) {
        const key = JSON.stringify(item);
        if (!map.has(key)) {
            map.set(key, true);
            result.push(item);
        }
    }

    return result;
}
