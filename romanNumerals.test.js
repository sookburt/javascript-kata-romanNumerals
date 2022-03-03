const { sum } = require("./romanNumerals");

describe("sum", () => {
  test("returns the sum of two numbers", () => {

    // Arrange
    const a = 2;
    const b = 2;
    const expectedResult = 4;

    // Act
    const actualResult = sum(a, b);

    // assert
    expect(actualResult).toBe(expectedResult);

  })
});