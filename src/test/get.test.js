import get from '../get.js';

describe('get', () => {
  
    // Test a valid path that exists in the object using string-style path
    it('should return correct value at a valid path', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, '1[0].2.3');
      expect(result).toBe('a');
    });
    
    // Test a valid path that exists in the object using string-style path
    it('should return correct value for an array-style path', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, ['1', '0', '2', '3']);
      expect(result).toBe('a');
    });
    
    // Test for an invalid path that does not exist in the object
    it('should return undefined when path is invalid', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, '1[0].2.3.4');
      expect(result).toBe(undefined);
    });
    
    // Test for an invalid path that does not exist in the object when a default value is determined
    it('should return the default value when object is undefined', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, '1[0].2.3.4', 'default');
      expect(result).toBe('default');
    });
    
    // Test for undefined object
    it('should return default value when object is undefined', () => {
      const result = get(undefined, '1[0].2.3', 'default');
      expect(result).toBe('default');
    });

    // Test for null object
    it('should return default value when object is null', () => {
        const result = get(null, '1[0].2.3', 'default');
        expect(result).toBe('default');
    });
  
    // Test for an invalid path without default value
    it('should return undefined for an invalid path without a default value', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, 'a.b.c');
      expect(result).toBe(undefined);
    });
  
    // Test for an empty path
    it('should return the object itself if the path is empty', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, []);
      expect(result).toEqual(object);
    });

    // Test that the output is the same type as the value we are getting
    it('should not modify the type of the output', () => {
      const object = { 1: [{ 2: { 3: 'a' } }] };
      const result = get(object, '1[0].2.3');
      expect(typeof result).toBe('string');
    });
  });