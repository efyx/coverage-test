const Calculator = require("./main");

describe("Calculator", () => {
  it("Should add two number", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
});
