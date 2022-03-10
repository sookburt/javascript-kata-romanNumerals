
const getRomanNumeral = (number) => { 


  let output = "";

  if(number < 11){
    const arr = [];
    arr.push(number)
    return mapIt(arr);
  }
  
  const splitNums = splitIt(number);
  output = mapIt(splitNums);
    
  return output;
};

  const splitIt = (number) => {

    // 874 - 4 = 870 - 70 = 800
    let innerNum = number;
    let totalNumCount = number.toString().length -1;
    const outArray = [];

    while(innerNum > 0){
      const lastNum = parseInt(innerNum.toString().substring(totalNumCount)); 
      outArray.push(lastNum);
      innerNum -= lastNum; 
      totalNumCount --;
      }

    return outArray;
  };

  const mapIt = (numberArray) => {

    let output = "";

    const numerals = new Map();
    numerals.set(1, "I");
    numerals.set(2, "II");
    numerals.set(3, "III");
    numerals.set(4, "IV");
    numerals.set(5, "V");
    numerals.set(6, "VI");
    numerals.set(7, "VII");
    numerals.set(8, "VIII");
    numerals.set(9, "IX");
    numerals.set(10, "X");
    numerals.set(40, "XL");
    numerals.set(50, "L");
    numerals.set(90, "XC");
    numerals.set(100, "C");
    numerals.set(400, "CD");
    numerals.set(500, "D");
    numerals.set(900, "CM");
    numerals.set(1000, "M");

    numberArray.reverse().forEach(num => {

      output+= numerals.get(num);// || // if not in the map will need to some fartarsery...

    });

    return output;

  };




module.exports = { getRomanNumeral };