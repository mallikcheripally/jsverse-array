import mode from '@/methods/mode';

describe('mode', () => {
    it('should return the single most frequent element', () => {
        const result = mode([1, 2, 2, 3, 3, 4, 4, 4, 5]);
        expect(result).toEqual([4]);
    });

    it('should return all elements that are the most frequent', () => {
        const result = mode([1, 2, 2, 3, 3, 4]);
        expect(result).toEqual([2, 3]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = mode([]);
        expect(result).toEqual([]);
    });

    it('should return the single element when array has only one item', () => {
        const result = mode([1]);
        expect(result).toEqual([1]);
    });

    it('should return all elements if all have the same frequency', () => {
        const result = mode([1, 2, 3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should handle arrays with null and undefined values correctly', () => {
        const result = mode([null, undefined, undefined, null, null]);
        expect(result).toEqual([null]);
    });

    it('should handle arrays with non-primitive types (e.g., objects)', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const result = mode([obj1, obj2, obj1]);
        expect(result).toEqual([obj1]);
    });

    it('should return an empty array if the input is not an array', () => {
        expect(mode(null as any)).toEqual([]);
        expect(mode(undefined as any)).toEqual([]);
        expect(mode(42 as any)).toEqual([]);
        expect(mode('string' as any)).toEqual([]);
    });

    it('should handle large arrays efficiently', () => {
        const largeArray = Array.from({ length: 1000000 }, () => 1).concat(Array.from({ length: 1000000 }, () => 2));
        const result = mode(largeArray);
        expect(result).toEqual([1, 2]);
    });

    it('should handle mixed data types in the array', () => {
        const result = mode([1, '1', 1, 'a', 'a', 'a']);
        expect(result).toEqual(['a']);
    });

    it('should treat different types (number vs string) separately', () => {
        const result = mode([1, '1', 2, '2', '2']);
        expect(result).toEqual(['2']);
    });
});
