import toString from '../toString.js';

describe('toString', () => {

    // Converting number, 1 to string
    it('should return "1" when converting number 1', () => {
        expect(toString(1)).toBe("1");
    });

    // Converting number, 2.2 to string
    it('should return "2.2" when converting number 2.2', () => {
        expect(toString(2.2)).toBe("2.2");
    });

    // Converting string, "3.3" to string
    it('should return "3.3" when converting string "3.3"', () => {
        expect(toString("3.3")).toBe("3.3");
    });

    // Converting number, -Infinity to string
    it('should return "-Infinity" when converting -Infinity', () => {
        expect(toString(-Infinity)).toBe("-Infinity");
    });

    // Converting number, +Infinity to string
    it('should return "Infinity" when converting +Infinity', () => {
        expect(toString(Infinity)).toBe("Infinity");
    });

    // Converting number, NaN to string
    it('should return "NaN" when converting NaN', () => {
        expect(toString(NaN)).toBe("NaN");
    });

    // Converting boolean, true to string
    it('should return "true" when converting true', () => {
        expect(toString(true)).toBe("true");
    });

    // Converting object, null to string
    it('should return "null" when converting null', () => {
        expect(toString(null)).toBe("null");
    });

    // Converting undefined to string
    it('should return "undefined" when converting undefined', () => {
        expect(toString(undefined)).toBe("undefined");
    });

    // Converting object, empty object to string
    it('should return "[object Object]" when converting an empty object', () => {
        expect(toString({})).toBe("[object Object]");
    });

    // Converting object, object of type number: Object(1) to string
    it('should return "1" when converting Object(1)', () => {
        expect(toString(Object(1))).toBe("1");
    });

    // Converting symbol, empty symbol to string
    it('should return "Symbol()" when converting an empty symbol', () => {
        expect(toString(Symbol())).toBe("Symbol()");
    });

    // Converting symbol, type symbol with value 1 to string
    it('should return "Symbol(1)" when converting a symbol with value 1', () => {
        expect(toString(Symbol(1))).toBe("Symbol(1)");
    });

    // Converting symbol, symbol("123") to string
    it('should return "Symbol(123)" when converting symbol("123")', () => {
        expect(toString(Symbol("123"))).toBe("Symbol(123)");
    });

    // Converting object, array() to string
    it('should return "" when converting an empty array', () => {
        expect(toString([])).toBe("");
    });

    // Converting object, Array(3) = [undefined, undefined, undefined] to string
    it('should return ",," when converting Array(3)', () => {
        expect(toString(Array(3))).toBe(",,");
    });

    // Converting number, 0 to string
    it('should return "0" when converting number 0', () => {
        expect(toString(0)).toBe("0");
    });

});