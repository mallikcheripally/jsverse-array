import rotate from '@/methods/rotate';

describe('rotate function', () => {
    it('should rotate the array to the right by the given number of positions', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotate(arr, 2);
        expect(result).toEqual([4, 5, 1, 2, 3]);
    });

    it('should rotate the array to the left by the given number of positions if positions is negative', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotate(arr, -1);
        expect(result).toEqual([2, 3, 4, 5, 1]);
    });

    it('should rotate the array correctly when positions is greater than the array length', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotate(arr, 7);
        expect(result).toEqual([4, 5, 1, 2, 3]);
    });

    it('should return the original array if positions is 0', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotate(arr, 0);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = rotate([], 3);
        expect(result).toEqual([]);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => rotate(null as any, 3)).toThrow(TypeError);
        expect(() => rotate(null as any, 3)).toThrow('Invalid input: Expected an array.');

        expect(() => rotate(42 as any, 3)).toThrow(TypeError);
        expect(() => rotate(42 as any, 3)).toThrow('Invalid input: Expected an array.');
    });

    it('should throw an error if positions is not an integer', () => {
        expect(() => rotate([1, 2, 3], 1.5)).toThrow(TypeError);
        expect(() => rotate([1, 2, 3], 1.5)).toThrow('Invalid input: Expected an integer for positions.');

        expect(() => rotate([1, 2, 3], NaN)).toThrow(TypeError);
        expect(() => rotate([1, 2, 3], NaN)).toThrow('Invalid input: Expected an integer for positions.');
    });
});
