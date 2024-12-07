import eq from '../eq.js';

describe('eq', () => {

    // Equating number, 1 and number, 1
    it('should return true when comparing 1 with 1', () => {
        expect(eq(1, 1)).toBe(true);
    });

    // Equating number, 2.1 and number, 2
    it('should return false when comparing 2.1 with 2', () => {
        expect(eq(2.1, 2)).toBe(false);
    });

    // Equating number, -3 and number, 3
    it('should return false when comparing -3 with 3', () => {
        expect(eq(-3, 3)).toBe(false);
    });

    // Equating number, 4 and string, "4"
    it('should return true when comparing 4 with "4"', () => {
        expect(eq(4, "4")).toBe(true);
    });

    // Equating number, +Infinity and number, -Infinity
    it('should return false when comparing +Infinity with -Infinity', () => {
        expect(eq(+Infinity, -Infinity)).toBe(false);
    });

    // Equating object, null and number, NaN
    it('should return false when comparing null with NaN', () => {
        expect(eq(null, NaN)).toBe(false);
    });

    // Equating undefined, undefined and number, 1
    it('should return false when comparing undefined with 1', () => {
        expect(eq(undefined, 1)).toBe(false);
    });

    // Equating number, 1 and object, null
    it('should return false when comparing 1 with null', () => {
        expect(eq(1, null)).toBe(false);
    });

    // Equating object, array and number, NaN
    it('should return false when comparing array with NaN', () => {
        expect(eq([], NaN)).toBe(false);
    });

    // Equating number, +Infinity and object, null
    it('should return false when comparing +Infinity with null', () => {
        expect(eq(+Infinity, null)).toBe(false);
    });

    // Equating number, -Infinity and undefined, undefined
    it('should return false when comparing -Infinity with undefined', () => {
        expect(eq(-Infinity, undefined)).toBe(false);
    });

});