/**
 * Finds the most frequently occurring element(s) in an array.
 *
 * @param {Array<any>} array - The array to find the mode in.
 * @returns {Array<any>} - An array containing the most frequently occurring element(s).
 */
export default function mode(array: any[]): any[] {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    const frequencyMap = new Map<any, number>();
    let maxFrequency = 0;
    let modes: any[] = [];

    for (const item of array) {
        let count = frequencyMap.get(item) || 0;
        count++;
        frequencyMap.set(item, count);

        if (count > maxFrequency) {
            maxFrequency = count;
            modes = [item];  // Reset modes to the new most frequent item
        } else if (count === maxFrequency) {
            modes.push(item);  // Add to modes if it matches the current max frequency
        }
    }

    return modes;
}
