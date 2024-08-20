/**
 * Returns the Cartesian product of multiple arrays.
 *
 * @param {Array<Array<any>>} arrays - The arrays to compute the Cartesian product of.
 * @returns {Array<Array<any>>} - The Cartesian product of the input arrays.
 * @throws {TypeError} - If the input is not an array of arrays.
 */
export default function cartesianProduct(...arrays: any[][]): any[][] {
    if (arrays.some(arr => !Array.isArray(arr))) {
        throw new TypeError('Invalid input: Expected an array of arrays.');
    }

    return arrays.reduce((acc, curr) => {
        return acc.flatMap(a => curr.map(b => [...a, b]));
    }, [[]]);
}
