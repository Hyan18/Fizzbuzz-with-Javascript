describe("fizzBuzz", function() {
  it("should return 1 when given 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("should return 'Fizz' when given 3", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("should return 'Buzz' when given 5", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("should return 'FizzBuzz' when given 15", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it("should return 'Buzz' when given 10", function() {
    expect(fizzBuzz(10)).toEqual('Buzz');
  })
});
