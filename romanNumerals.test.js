const { TestWatcher } = require("jest");
const { getRomanNumeral } = require("./romanNumerals");

describe("getRomanNumeral", () => {

  // Arrange : Act : Assert
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
    // Arrange : Act : Assert
    expect(getRomanNumeral(number)).toBe(numeral);
  });

  it.each([
    [9, "IX"],
    [10, "X"],
  ])("returns correct Roman Numeral when number %i passed in", 
    (number, numeral) => {
    // Arrange : Act : Assert
    expect(getRomanNumeral(number)).toBe(numeral);
  });

  xtest("That 874 returns DCCCLXXIV", () => {
    expect(getRomanNumeral(874)).toBe("DCCCLXXIV");
  });
  

});