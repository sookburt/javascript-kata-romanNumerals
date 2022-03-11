
const getRomanNumeral = (number) => { 
  if (number < 1) throw new Error("number must be greater than 0");
  if (number > 3000) throw new Error("number must be 3000 or less");

  let output = "";

  if (number < 11) {
    const arr = [];
    arr.push(number)
    return mapIt(arr);
  }
  
  const splitNums = splitIt(number);
  output = mapIt(splitNums);
    
  return output;
};

  const splitIt = (number) => {
    const outArray = [];

    if (number < 10) {
      outArray.push(number);
      return outArray;
    }

    let innerNum = number;
    let totalNumCount = number.toString().length -1;

    while (innerNum > 0) {
      const lastNum = parseInt(innerNum.toString().substring(totalNumCount)); 
      outArray.push(lastNum);
      innerNum -= lastNum; 
      totalNumCount --;
      }
    //console.log(outArray.toString);
    return outArray;
  };

  const mapIt = (numberArray) => {

    let output = "";

    const numerals = new Map();
    numerals.set(1, "I");
    numerals.set(4, "IV");
    numerals.set(5, "V");
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

      if (numerals.get(num) === undefined) {

        let numeralBuilder = "";
        let quinValue = "";
        let decValue = "";

        if (num > 1 && num < 10) {
          quinValue = numerals.get(5);
          decValue = numerals.get(1);
        }
        if (num > 10 && num < 100) { 
          quinValue = numerals.get(50);
          decValue = numerals.get(10);
        }
        if (num > 100 && num < 1000) {
          quinValue = numerals.get(500);
          decValue = numerals.get(100);
        }
        if (num > 1000 && num < 3001) {
          decValue = numerals.get(1000);
        }

        const firstNum = num.toString().split("")[0];
        const dividedNum = parseInt(firstNum)/5;
        const moduloNum = parseInt(firstNum)%5;

        if (dividedNum > 0.9) {
          numeralBuilder += quinValue;
        }

        if (moduloNum > 0) {
          for (let i = 0; i < moduloNum; i++) {
            numeralBuilder += decValue;
          }
        }

        output += numeralBuilder;
      }
      else {
        output+= numerals.get(num);
      }
    });

    return output;
  };




module.exports = { getRomanNumeral };