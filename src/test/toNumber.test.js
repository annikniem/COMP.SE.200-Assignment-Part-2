import toNumber from '../toNumber.js';

describe('toNumber', () => {

    // Converting number, 1 to number
    it('should return 1 when converting number 1', () => {
        expect(toNumber(1)).toBe(1);
    });

    // Converting number, 2.2 to number
    it('should return 2.2 when converting number 2.2', () => {
        expect(toNumber(2.2)).toBe(2.2);
    });

    // Converting string, "3.3" to number
    it('should return 3.3 when converting string "3.3"', () => {
        expect(toNumber("3.3")).toBe(3.3);
    });

    // Converting number, -Infinity to number
    it('should return -Infinity when converting -Infinity', () => {
        expect(toNumber(-Infinity)).toBe(-Infinity);
    });

    // Converting number, +Infinity to number
    it('should return +Infinity when converting +Infinity', () => {
        expect(toNumber(Infinity)).toBe(Infinity);
    });

    // Converting number, NaN to number
    it('should return NaN when converting NaN', () => {
        expect(toNumber(NaN)).toBeNaN();
    });

    // Converting boolean, true to number
    it('should return 1 when converting true', () => {
        expect(toNumber(true)).toBe(1);
    });

    // Converting object, null to number
    it('should return 0 when converting null', () => {
        expect(toNumber(null)).toBe(0);
    });

    // Converting undefined to number
    it('should return 0 when converting undefined', () => {
        expect(toNumber(undefined)).toBe(0);
    });

    // Converting object, empty object to number
    it('should return NaN when converting an empty object', () => {
        expect(toNumber({})).toBeNaN();
    });

    // Converting object, object of type number: Object(1) to number
    it('should return 1 when converting Object(1)', () => {
        expect(toNumber(Object(1))).toBe(1);
    });

    // Converting symbol, empty symbol to number
    it('should return NaN when converting an empty symbol', () => {
        expect(toNumber(Symbol())).toBeNaN();
    });

    // Converting symbol, type symbol with value 1 to number
    it('should return NaN when converting a symbol with value 1', () => {
        expect(toNumber(Symbol(1))).toBeNaN();
    });

    // Converting symbol, symbol("123") to number
    it('should return NaN when converting symbol("123")', () => {
        expect(toNumber(Symbol("123"))).toBeNaN();
    });

    // Converting object, array() to number
    it('should return 0 when converting an empty array', () => {
        expect(toNumber([])).toBe(0);
    });

    // Converting object, Array(3) = [undefined, undefined, undefined] to number
    it('should return 0 when converting Array(3)', () => {
        expect(toNumber(Array(3))).toBe(0);
    });

    // Converting boolean, false to number
    it('should return 0 when converting false', () => {
        expect(toNumber(false)).toBe(0);
    });

});