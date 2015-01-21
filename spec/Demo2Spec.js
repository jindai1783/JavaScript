describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz(); 
  });

  it("should return fizz if divisible by 3", function() {
    expect(fizzbuzz.divisibleByThree(3).toEqual(true));
  });

  it("should not return fizz if not divisible by 3", function() {
    expect(fizzbuzz.divisibleByThree(1).toEqual(false));
  });

  it("should return buzz if divisible by 5", function() {
    expect(fizzbuzz.divisibleByThree(5).toEqual(true));
  });

  it("should not return fizz if not divisible by 3", function() {
    expect(fizzbuzz.divisibleByThree(1).toEqual(false));
  });

  it("should return fizzbuzz if divisible by 15", function() {
    expect(fizzbuzz.divisibleByThree(15).toEqual(true));
  });

  it("should not return fizz if not divisible by 3", function() {
    expect(fizzbuzz.divisibleByThree(1).toEqual(false));
  });

});