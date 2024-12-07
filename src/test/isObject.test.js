import isObject from '../isObject.js';

describe('isObject', () => {

    // Checking if number, 1 is an object
    it('should return false when checking number 1', () => {
        expect(isObject(1)).toBe(false);
    });

    // Checking if number, 2.2 is an object
    it('should return false when checking number 2.2', () => {
        expect(isObject(2.2)).toBe(false);
    });

    // Checking if string, "3.3" is an object
    it('should return false when checking string "3.3"', () => {
        expect(isObject("3.3")).toBe(false);
    });

    // Checking if number, -Infinity is an object
    it('should return false when checking number -Infinity', () => {
        expect(isObject(-Infinity)).toBe(false);
    });

    // Checking if number, +Infinity is an object
    it('should return false when checking number +Infinity', () => {
        expect(isObject(+Infinity)).toBe(false);
    });

    // Checking if number, NaN is an object
    it('should return false when checking number NaN', () => {
        expect(isObject(NaN)).toBe(false);
    });

    // Checking if boolean, true is an object
    it('should return false when checking boolean true', () => {
        expect(isObject(true)).toBe(false);
    });

    // Checking if object, null is an object
    it('should return false when checking null', () => {
        expect(isObject(null)).toBe(false);
    });

    // Checking if object, empty object is an object
    it('should return true when checking an empty object', () => {
        expect(isObject({})).toBe(true);
    });

    // Checking if object, object of type number: Object(1) is an object
    it('should return true when checking Object(1)', () => {
        expect(isObject(Object(1))).toBe(true);
    });

    // Checking if object, object(null) is an object
    it('should return true when checking Object(null)', () => {
        expect(isObject(Object(null))).toBe(true);
    });

    // Checking if object, object(undefined) is an object
    it('should return true when checking Object(undefined)', () => {
        expect(isObject(Object(undefined))).toBe(true);
    });

    // Checking if symbol, empty symbol is an object
    it('should return false when checking an empty symbol', () => {
        expect(isObject(Symbol())).toBe(false);
    });

    // Checking if symbol, type symbol with value 1 is an object
    it('should return false when checking a symbol with value 1', () => {
        expect(isObject(Symbol(1))).toBe(false);
    });

    // Checking if object, array() is an object
    it('should return true when checking an empty array', () => {
        expect(isObject([])).toBe(true);
    });

    // Checking if object, Array(3) = [undefined, undefined, undefined] is an object
    it('should return true when checking Array(3)', () => {
        expect(isObject(Array(3))).toBe(true);
    });

});