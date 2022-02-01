var assert = require("assert");
var Calculate =  require('../TDDtest/script.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('calculates factorial of the input', () => {
      const expected = 24;
      const input = 4;
      
      const results = Calculate.factorial(input);

      assert.equal(results, expected)
    })
    it('returns a 1 if the input is 0', () => {
      const expected = 1;
      const input = 0;

      const results = Calculate.factorial(input);

      assert.equal(results, expected);
    })
  });
});