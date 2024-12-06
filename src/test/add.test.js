import add from '../add.js';

describe('add', () => {

    // Adding two positive numbers
    it('should add two positive numbers correctly', () => {
        const result = add(6, 4);
        expect(result).toBe(10);
    });

    // Adding a positive and a negative number
    it('should add a positive and a negative number correctly', () => {
        const result = add(6, -4);
        expect(result).toBe(2);
    });

    // Adding two negative numbers
    it('should add two negative numbers correctly', () => {
        const result = add(-6, -4);
        expect(result).toBe(-10);
    });

    // Adding zero to a positive number
    it('should return the same number when adding zero', () => {
        const result = add(6, 0);
        expect(result).toBe(6);
    });

    // Adding zero to a negative number
    it('should return the same negative number when adding zero', () => {
        const result = add(-6, 0);
        expect(result).toBe(-6);
    });

    // Adding zero as the first number to a positive number
    it('should return the same positive number when zero is the first number', () => {
        const result = add(0, 4);
        expect(result).toBe(4);
    });

    // Adding zero as the first number to a negative number
    it('should return the same negative number when zero is the first number', () => {
        const result = add(0, 4);
        expect(result).toBe(4);
    });
    
    // Adding floating point numbers
    it('should add floating point numbers correctly', () => {
        const result = add(1.5, 2.3);
        expect(result).toBeCloseTo(3.8);
    });

});