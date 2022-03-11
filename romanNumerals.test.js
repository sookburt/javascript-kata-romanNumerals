const { TestWatcher } = require("jest");
const { getRomanNumeral } = require("./romanNumerals");

describe("getRomanNumeral", () => {

  test("that an error is thrown when passing in an inappropriate number", () => {
    expect(() => {
      getRomanNumeral(0);
    }).toThrow("number must be greater than 0"); 
    expect(() => {
      getRomanNumeral(4000);
    }).toThrow("number must be 3000 or less");
  });

  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
  ])(`returns correct Roman Numeral when number %i passed in`, 
    (number, numeral) => {
      expect(getRomanNumeral(number)).toBe(numeral);
  });

  it.each([
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
  ])("returns correct Roman Numeral when number %i passed in", 
    (number, numeral) => {
    expect(getRomanNumeral(number)).toBe(numeral);
  });

  it.each([
    [9, "IX"],
    [10, "X"],
  ])("returns correct Roman Numeral when number %i passed in", 
    (number, numeral) => {
    expect(getRomanNumeral(number)).toBe(numeral);
  });

  test("That 874 returns DCCCLXXIV", () => {
    expect(getRomanNumeral(874)).toBe("DCCCLXXIV");
  });

  test("That 222 returns CCXXII", () => {
    expect(getRomanNumeral(222)).toBe("CCXXII");
  });

  test("That 444 returns CDXLIV", () => {
    expect(getRomanNumeral(444)).toBe("CDXLIV");
  });

  test("That 999 returns CMXCIX", () => {
    expect(getRomanNumeral(999)).toBe("CMXCIX");
  });

  test("That 555 returns DLV", () => {
    expect(getRomanNumeral(555)).toBe("DLV");
  }); 

  test("That 2222 returns MMCCXXII", () => {
    expect(getRomanNumeral(2222)).toBe("MMCCXXII");
  });

});