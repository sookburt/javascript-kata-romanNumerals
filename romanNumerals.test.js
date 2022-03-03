const { getRomanNumeral } = require("./romanNumerals");

describe("getRomanNumeral", () => {
  test("returns 1 when I passed in", () => {

    // Arrange
    const I = "I";
    const expectedResult = 1;

    // Act
    const actualResult = getRomanNumeral(I);

    // assert
    expect(actualResult).toBe(expectedResult);

  })
});