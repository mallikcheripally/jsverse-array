import unique from '@/methods/unique';

describe('unique function', () => {
    it('should return a new array with only unique elements', () => {
        const arr = [1, 2, 2, 3, 4, 4, 5];
        const result = unique(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = unique([]);
        expect(result).toEqual([]);
    });

    it('should return the array as-is if it contains only one item', () => {
        const result = unique([1]);
        expect(result).toEqual([1]);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => unique(null as any)).toThrow(TypeError);
        expect(() => unique(null as any)).toThrow('Invalid input: Expected an array.');

        expect(() => unique(undefined as any)).toThrow(TypeError);
        expect(() => unique(undefined as any)).toThrow('Invalid input: Expected an array.');

        expect(() => unique(42 as any)).toThrow(TypeError);
        expect(() => unique(42 as any)).toThrow('Invalid input: Expected an array.');

        expect(() => unique('string' as any)).toThrow(TypeError);
        expect(() => unique('string' as any)).toThrow('Invalid input: Expected an array.');
    });

    it('should handle arrays with mixed types correctly', () => {
        const arr = [1, '1', 1, '1', true, false, true];
        const result = unique(arr);
        expect(result).toEqual([1, '1', true, false]);
    });

    it('should handle arrays with objects correctly (reference-based uniqueness)', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const arr = [obj1, obj2, obj1, obj2];
        const result = unique(arr);
        expect(result).toEqual([obj1, obj2]);
    });

    it('should handle arrays with nested arrays correctly', () => {
        const arr = [[1, 2], [1, 2], [3, 4]];
        const result = unique(arr);
        expect(result).toEqual([[1, 2], [3, 4]]);
    });

    it('should treat NaN values as unique', () => {
        const arr = [NaN, NaN, 1, 2, 2];
        const result = unique(arr);
        expect(result).toEqual([NaN, 1, 2]);
    });

    it('should handle arrays with undefined and null values correctly', () => {
        const arr = [undefined, null, null, undefined, 1];
        const result = unique(arr);
        expect(result).toEqual([undefined, null, 1]);
    });

    it('should handle large arrays efficiently', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, i) => i % 1000);
        const result = unique(largeArray);
        expect(result.length).toBe(1000);
    });
});
