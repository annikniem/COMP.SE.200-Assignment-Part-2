import filter from '../filter.js';

describe('filter', () => {
  
    // Test filtering for valid input params
    it('should filter a value correctly', () => {
      const nums = [1, 2, 3, 4];
      const result = filter(nums, num => num === 2);
      expect(result).toEqual([2]);
    });
    
    // Test filtering for an empty array
    it('should return an empty array when filtering an empty array', () => {
      const nums = [];
      const result = filter(nums, num => num < 2);
      expect(result).toEqual([]);
    });
    
    // Test filtering for an array with no elements matching the filtering condition
    it('should return an empty array when no elements match the filtering condition', () => {
      const nums = [1, 2, 3, 4];
      const result = filter(nums, num => num > 5);
      expect(result).toEqual([]);
    });
    
    // Test filtering for an array where all elements match the filtering condition
    it('should return input when all elements match the filtering condition', () => {
      const nums = [1, 2, 3, 4];
      const result = filter(nums, num => num > 0);
      expect(result).toEqual([1, 2, 3, 4]);
    });
    
    // Should return empty array for an undefined input
    it('should return empty array for an undefined input', () => {
      const nums = undefined;
      const result = filter(nums, num => num > 0);
      expect(result).toEqual([]);
    });

    // Should return empty array for a null input
    it('should return empty array for a null input', () => {
      const nums = null;
      const result = filter(nums, num => num === 0);
      expect(result).toEqual([]);
    });
  
    // Filters out empty elements in sparse input
    it('should filter out empty elements in sparse array', () => {
      const nums = [1,,,4];
      const result = filter(nums, num => num !== undefined);
      expect(result).toEqual([1, 4]);
    });

    // Filters out null elements
    it('should be able to filter out null elements', () => {
      const nums = [1, null, 3, 4];
      const result = filter(nums, num => num !== null);
      expect(result).toEqual([1, 3, 4]);
    });

    // Filtering works on arrays with mixed type elements
    it('filtering works on mixed type arrays', () => {
      const vehicles = ['boat', 'car', 1];
      const result = filter(vehicles, veh => typeof(veh) === 'string');
      expect(result).toEqual(['boat', 'car']);
    });

    // Filtering works on arrays with string type elements
    it('filtering works on string type arrays', () => {
      const vehicles = ['boat', 'car'];
      const result = filter(vehicles, veh => veh === 'car');
      expect(result).toEqual(['car']);
    });

    // Filtering works on arrays with object type elements
    it('filtering works on object type arrays', () => {
      const users = [{'user':'barney', 'active':true}, {'user':'fred', 'active':false}]
      const result = filter(users, ({active}) => active);
      expect(result).toEqual([{'user':'barney', 'active':true}]);
    });
  });