const fizzBuzzer = require("../fizzBuzzer");

const expect = require("chai").expect;

describe("fizzBuzzer", function() {
  it("should equal 'fizz-buzz' when number is divisible by both 3 and 5", function() {
    const mult15 = [15, 30, 45, 60, 75, 90, 105];
    mult15.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal("fizz-buzz");
    });
  });

  it("should equal 'fizz' when only divisible by 3 but not 5", function() {
    const mult3 = [3, 6, 9, 12, 18, 21, 24, 102];
    mult3.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal("fizz");
    });
  });

  it("should equal 'buzz' when only divisible by 5 but not 3", function() {
    const mult5 = [5, 10, 20, 25, 35, 110, 1000];
    mult5.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal("buzz");
    });
  });

  it("should equal the number input if not divisible by 3 or 5", function() {
    const notMult = [1, 2, 4, 7, 14, 56, 79, 82, 101, 1001];
    notMult.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it("should raise error if input is not a number", function() {
    const nonNumeric = ["a", "", "3x", "%", " "];
    nonNumeric.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
  // The following doesn't work. You need to encapsulate the error-raising function inside another function:
  // it("should raise error if input is not a number", function() {
  //   const nonNumeric = ["a", "", "3x", "%", " "];
  //   nonNumeric.forEach(function(input) {
  //     expect(fizzBuzzer(input)).to.throw(Error);
  //   });
  // });

  it("should raise error if input is null", function() {
    expect(function() {
      fizzBuzzer(null);
    }).to.throw(Error);
  });

  it("should raise error if input is undefined", function() {
    expect(function() {
      fizzBuzzer(undefined);
    }).to.throw(Error);
  });

  // From official solution:
  it("should produce error if input isn't number", function() {
    const badInputs = [true, false, "cat", function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
