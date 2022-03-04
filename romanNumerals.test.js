const { getRomanNumeral } = require("./romanNumerals");

describe("getRomanNumeral", () => {
  test("returns correct Roman Numeral when number under 4 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(1)).toBe("I");
    expect(getRomanNumeral(2)).toBe("II");
    expect(getRomanNumeral(3)).toBe("III");
  });

  test("returns correct Roman Numeral when number 4 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(4)).toBe("IV");
  });

  test("returns correct Roman Numeral when number 5 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(5)).toBe("V");
  });

  test("returns correct Roman Numeral when number 6 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(6)).toBe("VI");
  });

  test("returns correct Roman Numeral when number 7 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(7)).toBe("VII");
  });

  test("returns correct Roman Numeral when number 8 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(8)).toBe("VIII");
  });

  test("returns correct Roman Numeral when number 9 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(9)).toBe("IX");
  });
  
  test("returns correct Roman Numeral when number 10 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(10)).toBe("X");
  });

  test("returns correct Roman Numeral when number 11 passed in", () => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(11)).toBe("XI");
  });


});