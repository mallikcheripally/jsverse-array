import average from '@/methods/average';

describe('average function', () => {
    it('should return the average of all elements in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = average(arr);
        expect(result).toBe(3);
    });

    it('should return null for an empty array', () => {
        const result = average([]);
        expect(result).toBeNull();
    });

    it('should return the single element as the average if the array has only one item', () => {
        const result = average([42]);
        expect(result).toBe(42);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => average(null as any)).toThrow(TypeError);
        expect(() => average(null as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => average(undefined as any)).toThrow(TypeError);
        expect(() => average(undefined as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => average(42 as any)).toThrow(TypeError);
        expect(() => average(42 as any)).toThrow('Invalid input: Expected an array of numbers.');

        expect(() => average('string' as any)).toThrow(TypeError);
        expect(() => average('string' as any)).toThrow('Invalid input: Expected an array of numbers.');
    });

    it('should throw an error if the array contains non-number elements', () => {
        // @ts-ignore
        expect(() => average([1, 2, '3', 4])).toThrow(TypeError);
        expect(() => average([1, 2, NaN, 4])).toThrow(TypeError);
    });

    it('should handle large arrays efficiently and return the correct average', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
        const result = average(largeArray);
        expect(result).toBe(500000.5);
    });

    it('should correctly compute the average of an array with negative numbers', () => {
        const arr = [1, -2, 3, -4, 5];
        const result = average(arr);
        expect(result).toBe(0.6);
    });

    it('should correctly compute the average of an array with floating-point numbers', () => {
        const arr = [1.1, 2.2, 3.3, 4.4, 5.5];
        const result = average(arr);
        expect(result).toBeCloseTo(3.3);
    });
});
