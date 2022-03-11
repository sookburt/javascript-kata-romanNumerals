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

});