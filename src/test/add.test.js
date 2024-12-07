import add from '../add.js';

describe('add', () => {

    // Adding two positive numbers
    it('should add two positive numbers correctly', () => {
        const result = add(6, 4);
        expect(result).toBe(10);
    });

    // Adding number, 1 and number, 1
    it('should add 1 and 1 correctly', () => {
        const result = add(1, 1);
        expect(result).toBe(2);
    });

    // Adding number, 1.1 and number, 1.1
    it('should add 1.1 and 1.1 correctly', () => {
        const result = add(1.1, 1.1);
        expect(result).toBe(2.2);
    });

    // Adding number, -1.1 and number, 1.1
    it('should add -1.1 and 1.1 correctly', () => {
        const result = add(-1.1, 1.1);
        expect(result).toBe(0);
    });

    // Adding number, -1.1 and number, -1.1
    it('should add -1.1 and -1.1 correctly', () => {
        const result = add(-1.1, -1.1);
        expect(result).toBe(-2.2);
    });

    // Adding object, null and number, NaN
    it('should return NaN when adding null and NaN', () => {
        const result = add(null, NaN);
        expect(result).toBeNaN();
    });

    // Adding undefined, undefined and number, NaN
    it('should return NaN when adding undefined and NaN', () => {
        const result = add(undefined, NaN);
        expect(result).toBeNaN();
    });

    // Adding object, array and number, NaN
    it('should return NaN when adding array and NaN', () => {
        const result = add([], NaN);
        expect(result).toBeNaN();
    });

    // Adding number, +Infinity and number, -Infinity
    it('should return NaN when adding +Infinity and -Infinity', () => {
        const result = add(+Infinity, -Infinity);
        expect(result).toBeNaN();
    });

    // Adding number, 1 and number, -Infinity
    it('should return -Infinity when adding 1 and -Infinity', () => {
        const result = add(1, -Infinity);
        expect(result).toBe(-Infinity);
    });

});