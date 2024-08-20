import cartesianProduct from '@/methods/cartesianProduct';

describe('cartesianProduct function', () => {
    it('should return the Cartesian product of two arrays', () => {
        const arr1 = [1, 2];
        const arr2 = ['a', 'b'];
        const result = cartesianProduct(arr1, arr2);
        expect(result).toEqual([
            [1, 'a'], [1, 'b'],
            [2, 'a'], [2, 'b']
        ]);
    });

    it('should return the Cartesian product of three arrays', () => {
        const arr1 = [1, 2];
        const arr2 = ['a', 'b'];
        const arr3 = ['X', 'Y'];
        const result = cartesianProduct(arr1, arr2, arr3);
        expect(result).toEqual([
            [1, 'a', 'X'], [1, 'a', 'Y'],
            [1, 'b', 'X'], [1, 'b', 'Y'],
            [2, 'a', 'X'], [2, 'a', 'Y'],
            [2, 'b', 'X'], [2, 'b', 'Y']
        ]);
    });

    it('should return an empty array if any of the input arrays are empty', () => {
        const arr1 = [1, 2];
        const arr2: any[] = [];
        const result = cartesianProduct(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array of arrays with single elements if only one array is provided', () => {
        const arr1 = [1, 2, 3];
        const result = cartesianProduct(arr1);
        expect(result).toEqual([[1], [2], [3]]);
    });

    it('should throw an error if the input is not an array of arrays', () => {
        // @ts-ignore
        expect(() => cartesianProduct([1, 2], 'a')).toThrow(TypeError);
        // @ts-ignore
        expect(() => cartesianProduct([1, 2], 'a')).toThrow('Invalid input: Expected an array of arrays.');

        expect(() => cartesianProduct(null as any, [1, 2])).toThrow(TypeError);
        expect(() => cartesianProduct(null as any, [1, 2])).toThrow('Invalid input: Expected an array of arrays.');
    });

    it('should correctly compute the Cartesian product of arrays containing nested arrays', () => {
        const arr1 = [[1], [2]];
        const arr2 = [['a'], ['b']];
        const result = cartesianProduct(arr1, arr2);
        expect(result).toEqual([
            [[1], ['a']], [[1], ['b']],
            [[2], ['a']], [[2], ['b']]
        ]);
    });

    it('should handle large arrays efficiently and return the correct Cartesian product', () => {
        const largeArray1 = Array.from({ length: 10 }, (_, i) => i + 1);
        const largeArray2 = Array.from({ length: 10 }, (_, i) => String.fromCharCode(97 + i)); // ['a', 'b', ..., 'j']
        const result = cartesianProduct(largeArray1, largeArray2);
        expect(result.length).toBe(100);
    });
});
