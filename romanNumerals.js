
const getRomanNumeral = (numeral) => { 

  const romanNumerals = new Map();
  romanNumerals.set(1, "I");
  romanNumerals.set(2, "II");
  romanNumerals.set(3, "III");
  romanNumerals.set(4, "IV");
  romanNumerals.set(5, "V");
  romanNumerals.set(6, "VI");
  romanNumerals.set(7, "VII");
  romanNumerals.set(8, "VIII");
  romanNumerals.set(9, "IX");
  romanNumerals.set(10, "X");
  
  return romanNumerals.get(numeral);
};


module.exports = { getRomanNumeral };