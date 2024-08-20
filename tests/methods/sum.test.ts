import sum from '@/methods/sum';

describe('sum function', () => {
    it('should return the sum of all elements in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = sum(arr);
        expect(result).toBe(15);
    });

    it('should return 0 for an empty array', () => {
        const result = sum([]);
        expect(result).toBe(0);
    });

    it('should return the single element as the sum if the array has only one item', () => {
        const result = sum([42]);
        expect(result).toBe(42);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => sum(null as any)).toThrow(TypeError);
        expect(() => sum(null as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => sum(undefined as any)).toThrow(TypeError);
        expect(() => sum(undefined as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => sum(42 as any)).toThrow(TypeError);
        expect(() => sum(42 as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => sum('string' as any)).toThrow(TypeError);
        expect(() => sum('string' as any)).toThrow('Invalid input: Expected an array of numbers.');
    });

    it('should throw an error if the array contains non-number elements', () => {
        // @ts-ignore
        expect(() => sum([1, 2, '3', 4])).toThrow(TypeError);
        expect(() => sum([1, 2, NaN, 4])).toThrow(TypeError);
    });

    it('should handle large arrays efficiently and return the correct sum', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
        const result = sum(largeArray);
        expect(result).toBe(500000500000);
    });

    it('should correctly sum an array with negative numbers', () => {
        const arr = [1, -2, 3, -4, 5];
        const result = sum(arr);
        expect(result).toBe(3);
    });

    it('should correctly sum an array with floating-point numbers', () => {
        const arr = [1.1, 2.2, 3.3, 4.4, 5.5];
        const result = sum(arr);
        expect(result).toBeCloseTo(16.5);
    });
});
