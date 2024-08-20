import median from '@/methods/median'

describe('median function', () => {
    it('should return the median of an odd-length array', () => {
        const arr = [1, 3, 3, 6, 7, 8, 9];
        const result = median(arr);
        expect(result).toBe(6);
    });

    it('should return the median of an even-length array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 8, 9];
        const result = median(arr);
        expect(result).toBe(4.5);
    });

    it('should return null for an empty array', () => {
        const result = median([]);
        expect(result).toBeNull();
    });

    it('should return the single element as the median if the array has only one item', () => {
        const result = median([42]);
        expect(result).toBe(42);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => median(null as any)).toThrow(TypeError);
        expect(() => median(null as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => median(undefined as any)).toThrow(TypeError);
        expect(() => median(undefined as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => median(42 as any)).toThrow(TypeError);
        expect(() => median(42 as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => median('string' as any)).toThrow(TypeError);
        expect(() => median('string' as any)).toThrow('Invalid input: Expected an array of numbers.');
    });

    it('should throw an error if the array contains non-number elements', () => {
        // @ts-ignore
        expect(() => median([1, 2, '3', 4])).toThrow(TypeError);
        expect(() => median([1, 2, NaN, 4])).toThrow(TypeError);
    });

    it('should handle large arrays efficiently and return the correct median', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
        const result = median(largeArray);
        expect(result).toBe(500000.5);
    });

    it('should correctly find the median of an unsorted array', () => {
        const arr = [9, 3, 6, 7, 1, 3, 8];
        const result = median(arr);
        expect(result).toBe(6);
    });
});
