import capitalize from '../capitalize.js';

describe('capitalize', () => {
  
    // Test capitalization for input that is already correctly capitalized
    it('should not change already correctly capitalized input', () => {
      const result = capitalize('Abc');
      expect(result).toBe('Abc');
    });
    
    // Test capitalization for input that is fully capitalized
    it('should leave first letter capitalized and make rest lower case', () => {
      const result = capitalize('ABC');
      expect(result).toBe('Abc');
    });
    
    // Test capitalization for input with all capitalized except first letter
    it('should capitalize first letter and make rest lower case', () => {
      const result = capitalize('aBC');
      expect(result).toBe('Abc');
    });
    
    // Should leave numbers unchanged
    it('should leave numbers unchanged', () => {
      const result = capitalize('123');
      expect(result).toBe('123');
    });

    // Should leave empty spaces unchanged
    it('should leave empty spaces unchanged', () => {
      const result = capitalize('a BC');
      expect(result).toBe('A bc');
    });
  
    // Should leave boolean values unchanged
    it('should leave boolean values unchanged', () => {
      const result = capitalize(true);
      expect(result).toBe(true);
    });

    // Should leave arrays unchanged
    it('should leave array unchanged', () => {
      const result = capitalize(['aBC']);
      expect(result).toBe(['aBC']);
    });

    // Should leave null unchanged
    it('should leave null unchanged', () => {
      const result = capitalize(null);
      expect(result).toBe(null);
    });

    // Should leave undefined unchanged
    it('should leave undefined unchanged', () => {
      const result = capitalize(undefined);
      expect(result).toBe(undefined);
    });

    // Should leave object unchanged
    it('should leave object unchanged', () => {
      const result = capitalize(Object(1));
      expect(result).toBe(Object(1));
    });
  });