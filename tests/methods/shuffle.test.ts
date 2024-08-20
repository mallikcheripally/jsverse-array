import shuffle from '@/methods/shuffle';

describe('shuffle function (non-mutating)', () => {
    it('should return a shuffled array without modifying the original array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = shuffle(arr);
        expect(result).not.toEqual([1, 2, 3, 4, 5]);
        expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = shuffle([]);
        expect(result).toEqual([]);
    });

    it('should return the array as-is if it contains only one item', () => {
        const result = shuffle([1]);
        expect(result).toEqual([1]);
    });

    it('should throw an error if the input is not an array', () => {
        expect(() => shuffle(null as any)).toThrow(TypeError);
        expect(() => shuffle(null as any)).toThrow('Invalid input: Expected an array.');

        expect(() => shuffle(undefined as any)).toThrow(TypeError);
        expect(() => shuffle(undefined as any)).toThrow('Invalid input: Expected an array.');

        expect(() => shuffle(42 as any)).toThrow(TypeError);
        expect(() => shuffle(42 as any)).toThrow('Invalid input: Expected an array.');

        expect(() => shuffle('string' as any)).toThrow(TypeError);
        expect(() => shuffle('string' as any)).toThrow('Invalid input: Expected an array.');
    });

    it('should not modify the original array', () => {
        const arr = [1, 2, 3, 4, 5];
        const arrCopy = [...arr];
        shuffle(arr);
        expect(arr).toEqual(arrCopy);
    });

    it('should result in different orders when shuffling multiple times', () => {
        const arr = [1, 2, 3, 4, 5];
        const results = new Set();

        for (let i = 0; i < 100; i++) {
            const shuffled = shuffle([...arr]);
            results.add(shuffled.join(','));
        }

        expect(results.size).toBeGreaterThan(1);
    });

    it('should contain all original elements after shuffling', () => {
        const arr = [1, 2, 3, 4, 5];
        const shuffled = shuffle(arr);
        expect(shuffled.sort()).toEqual(arr.sort());
    });
});
