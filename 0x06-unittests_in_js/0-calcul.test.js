const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should round sum of numbers", function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(2.7, 4.2), 7);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(2.4, 4.8), 7);
  });
});
