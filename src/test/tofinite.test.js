import toFinite from '../toFinite.js';

describe('toFinite', () => {

    // Converting number, 1 to finite number
    it('should return 1 when converting number 1', () => {
        expect(toFinite(1)).toBe(1);
    });

    // Converting number, 2.2 to finite number
    it('should return 2.2 when converting number 2.2', () => {
        expect(toFinite(2.2)).toBe(2.2);
    });

    // Converting string, "3.3" to finite number
    it('should return 3.3 when converting string "3.3"', () => {
        expect(toFinite("3.3")).toBe(3.3);
    });

    // Converting number, -Infinity to finite number
    it('should return -Number.MAX_VALUE when converting -Infinity', () => {
        expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
    });

    // Converting number, +Infinity to finite number
    it('should return Number.MAX_VALUE when converting +Infinity', () => {
        expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
    });

    // Converting number, NaN to finite number
    it('should return 0 when converting NaN', () => {
        expect(toFinite(NaN)).toBe(0);
    });

    // Converting boolean, true to finite number
    it('should return 1 when converting true', () => {
        expect(toFinite(true)).toBe(1);
    });

    // Converting object, null to finite number
    it('should return 0 when converting null', () => {
        expect(toFinite(null)).toBe(0);
    });

    // Converting undefined to finite number
    it('should return 0 when converting undefined', () => {
        expect(toFinite(undefined)).toBe(0);
    });

    // Converting object, empty object to finite number
    it('should return 0 when converting an empty object', () => {
        expect(toFinite({})).toBe(0);
    });

    // Converting object, object of type number: Object(1) to finite number
    it('should return 1 when converting Object(1)', () => {
        expect(toFinite(Object(1))).toBe(1);
    });

    // Converting symbol, empty symbol to finite number
    it('should return 0 when converting an empty symbol', () => {
        expect(toFinite(Symbol())).toBe(0);
    });

    // Converting symbol, type symbol with value 1 to finite number
    it('should return 0 when converting a symbol with value 1', () => {
        expect(toFinite(Symbol(1))).toBe(0);
    });

    // Converting symbol, symbol("123") to finite number
    it('should return 0 when converting symbol("123")', () => {
        expect(toFinite(Symbol("123"))).toBe(0);
    });

    // Converting object, array() to finite number
    it('should return 0 when converting an empty array', () => {
        expect(toFinite([])).toBe(0);
    });

    // Converting object, Array(3) = [undefined, undefined, undefined] to finite number
    it('should return 0 when converting Array(3)', () => {
        expect(toFinite(Array(3))).toBe(0);
    });

    // Converting boolean, false to finite number
    it('should return 0 when converting false', () => {
        expect(toFinite(false)).toBe(0);
    });

});