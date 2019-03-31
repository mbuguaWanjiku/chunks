var assert = require('assert');

const arrayOperations = require('../src/arrayOperations');
describe('arrayOperations', function() {
  describe('groupArrayElements', function() {
    it('should return  number of chunks equal to the divider', function() {
      const elements = [1,2,3,4,5];
      const divider = 3;
      var result = arrayOperations.groupArrayElements(elements,divider);
      assert.equal(result.length,3);
    });
    it('should return final chunk equal to the remainder', function() {
      const elements = [1,2,3,4,5];
      const divider = 3;
      var result = arrayOperations.groupArrayElements(elements,divider);
      assert.equal(result[2].length,1);
    });
    it('should return empty result if elements are undefined', function() {
      const elements = undefined;
      const divider = 3;
      var result = arrayOperations.groupArrayElements(elements,divider);
      assert.equal(result.length,0);
    });
    it('should return empty result if divider is not a positive integer', function() {
      const elements = [1,2,3,4,5];
      const divider = -1;
      var result = arrayOperations.groupArrayElements(elements,divider);
      assert.equal(result.length,0);
    });
  });
});