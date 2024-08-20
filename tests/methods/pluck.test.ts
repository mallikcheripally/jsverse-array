import { pluck } from '@/index';

describe('pluck', () => {
    it('should return an empty array if the input array is null or undefined', () => {
        expect(pluck(null, 'name')).toEqual([]);
        expect(pluck(undefined, 'name')).toEqual([]);
    });

    it('should return undefined for non-object items in the array', () => {
        const data = [null, undefined, 42, 'string', { name: 'Alice' }];
        expect(pluck(data as any[], 'name')).toEqual([undefined, undefined, undefined, undefined, 'Alice']);
    });

    it('should return an array of values corresponding to the specified key', () => {
        const users = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Charlie', age: 35 },
        ];
        const result = pluck(users, 'name');
        expect(result).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should handle an empty array and return an empty array', () => {
        const users: Array<{ name: string; age: number }> = [];
        const result = pluck(users, 'name');
        expect(result).toEqual([]);
    });

    it('should return an array of undefined values if the key does not exist on objects', () => {
        const users = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Charlie', age: 35 },
        ];
        const result = pluck(users, 'nonExistentKey' as any);
        expect(result).toEqual([undefined, undefined, undefined]);
    });

    it('should return an array of mixed values when key exists on some objects and not others', () => {
        const items = [
            { id: 1, name: 'Item 1' },
            { id: 2 },
            { id: 3, name: 'Item 3' },
        ];
        const result = pluck(items, 'name');
        expect(result).toEqual(['Item 1', undefined, 'Item 3']);
    });

    it('should work with different types of arrays', () => {
        const data = [
            { value: 10, flag: true },
            { value: 20, flag: false },
            { value: 30, flag: true },
        ];
        const result = pluck(data, 'value');
        expect(result).toEqual([10, 20, 30]);

        const resultFlags = pluck(data, 'flag');
        expect(resultFlags).toEqual([true, false, true]);
    });

    it('should return an empty array if the array is empty', () => {
        const emptyArray: Array<{ value: number }> = [];
        const result = pluck(emptyArray, 'value');
        expect(result).toEqual([]);
    });

    it('should handle arrays with complex objects', () => {
        const data = [
            { id: 1, details: { name: 'Alice' } },
            { id: 2, details: { name: 'Bob' } },
            { id: 3, details: { name: 'Charlie' } },
        ];
        const result = pluck(data, 'details');
        expect(result).toEqual([
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' },
        ]);
    });

    it('should handle large arrays efficiently', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, i) => ({
            id: i,
            value: `Value ${i}`,
        }));
        const result = pluck(largeArray, 'value');
        expect(result.length).toBe(1000000);
        expect(result[0]).toBe('Value 0');
        expect(result[999999]).toBe('Value 999999');
    });
});
