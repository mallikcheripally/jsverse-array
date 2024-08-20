/**
 * Efficiently extracts the values of a specified key from an array of objects.
 *
 * @param {Array<Record<string, any>> | null | undefined} array - The array of objects to pluck values from.
 * @param {keyof T} key - The key whose corresponding values will be extracted.
 * @returns {Array<any>} - An array of values corresponding to the specified key.
 */
export default function pluck<T extends Record<string, any>>(array: T[] | null | undefined, key: keyof T): Array<T[keyof T] | undefined> {
    if (!array) {
        return [];
    }

    const length = array.length;
    const result = new Array<T[keyof T] | undefined>(length);
    let i = 0;

    while (i < length) {
        const item = array[i];
        result[i] = item && typeof item === 'object' ? item[key] : undefined;
        i++;
    }

    return result;
}
