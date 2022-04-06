const Calculator = require("./main");

describe("Calculator", () => {
  it("Should add two number", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  it("Should throw exception", () => {
    expect(() => { 
      Calculator.add("foo", 2)
    }).toThrow(Error);
  });

});
