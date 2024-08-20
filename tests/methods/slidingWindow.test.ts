import slidingWindow from "@/methods/slidingWindow";

describe('slidingWindow function', () => {
    it('should return sub-arrays (windows) of the specified size', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = slidingWindow(arr, 3);
        expect(result).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
    });

    it('should return an empty array if the window size is larger than the array length', () => {
        const arr = [1, 2];
        const result = slidingWindow(arr, 3);
        expect(result).toEqual([]);
    });

    it('should return an array of single-element arrays when the window size is 1', () => {
        const arr = [1, 2, 3];
        const result = slidingWindow(arr, 1);
        expect(result).toEqual([[1], [2], [3]]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = slidingWindow([], 3);
        expect(result).toEqual([]);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => slidingWindow(null as any, 3)).toThrow(TypeError);
        expect(() => slidingWindow(null as any, 3)).toThrow('Invalid input: Expected an array.');

        expect(() => slidingWindow(42 as any, 3)).toThrow(TypeError);
        expect(() => slidingWindow(42 as any, 3)).toThrow('Invalid input: Expected an array.');
    });

    it('should throw an error if the window size is not a positive integer', () => {
        expect(() => slidingWindow([1, 2, 3], 0)).toThrow(TypeError);
        expect(() => slidingWindow([1, 2, 3], 0)).toThrow('Invalid input: Expected a positive integer for window size.');

        expect(() => slidingWindow([1, 2, 3], -1)).toThrow(TypeError);
        expect(() => slidingWindow([1, 2, 3], -1)).toThrow('Invalid input: Expected a positive integer for window size.');

        expect(() => slidingWindow([1, 2, 3], 2.5)).toThrow(TypeError);
        expect(() => slidingWindow([1, 2, 3], 2.5)).toThrow('Invalid input: Expected a positive integer for window size.');
    });

    it('should handle large arrays efficiently and return the correct windows', () => {
        const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
        const result = slidingWindow(largeArray, 3);
        expect(result.length).toBe(998);
        expect(result[0]).toEqual([1, 2, 3]);
        expect(result[result.length - 1]).toEqual([998, 999, 1000]);
    });
});
