import add from '../add.js';

describe('add', () => {

    // Adding two integers: 1 and 1
    it('should add 1 and 1 correctly', () => {
        const result = add(1, 1);
        expect(result).toBe(2);
    });

    // Adding two floating-point numbers: 1.1 and 1.1
    it('should add 1.1 and 1.1 correctly', () => {
        const result = add(1.1, 1.1);
        expect(result).toBe(2.2);
    });

    // Adding a negative and a positive floating-point number: -1.1 and 1.1
    it('should add -1.1 and 1.1 correctly', () => {
        const result = add(-1.1, 1.1);
        expect(result).toBe(0);
    });

    // Adding two negative floating-point numbers: -1.1 and -1.1
    it('should add -1.1 and -1.1 correctly', () => {
        const result = add(-1.1, -1.1);
        expect(result).toBe(-2.2);
    });

    // Adding null and NaN
    it('should return NaN when adding null and NaN', () => {
        const result = add(null, NaN);
        expect(result).toBeNaN();
    });

    // Adding undefined and NaN
    it('should return NaN when adding undefined and NaN', () => {
        const result = add(undefined, NaN);
        expect(result).toBeNaN();
    });

    // Adding an array and NaN
    it('should return NaN when adding array and NaN', () => {
        const result = add([], NaN);
        expect(result).toBeNaN();
    });

    // Adding +Infinity and -Infinity
    it('should return NaN when adding +Infinity and -Infinity', () => {
        const result = add(+Infinity, -Infinity);
        expect(result).toBeNaN();
    });

    // Adding 1 and -Infinity
    it('should return -Infinity when adding 1 and -Infinity', () => {
        const result = add(1, -Infinity);
        expect(result).toBe(-Infinity);
    });

});