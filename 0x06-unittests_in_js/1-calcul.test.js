const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("ADDITION", function () {
    it("should return 6 when 1.4 and 4.5 are added", function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  
  describe('SUBTRACTION', function () {
    it("should return -4 when 4.5 is subtracted from 1.4", function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
  });

  describe('DIVISION', function () {
    it("should return 0.2 when 1.4 is divided by 4.5", function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
  });

  describe('DIVISION', function () {
    it("should return Error when 1.4 is divided by 0", function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
  });
});
