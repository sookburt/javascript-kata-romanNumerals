const { getRomanNumeral } = require("./romanNumerals");

describe("getRomanNumeral", () => {
  test("returns 1 when I passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral("I")).toBe(1);

  })
});