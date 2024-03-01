function convertToRoman(num) {
  const romanSymbols = [
    { roman: 1000, symbol: 'M' },
    { roman: 900, symbol: 'CM' },
    { roman: 500, symbol: 'D' },
    { roman: 400, symbol: 'CD' },
    { roman: 100, symbol: 'C' },
    { roman: 90, symbol: 'XC' },
    { roman: 50, symbol: 'L' },
    { roman: 40, symbol: 'XL' },
    { roman: 10, symbol: 'X' },
    { roman: 9, symbol: 'IX' },
    { roman: 5, symbol: 'V' },
    { roman: 4, symbol: 'IV' },
    { roman: 1, symbol: 'I' }
  ];

  let result = '';

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i].roman) {
      result += romanSymbols[i].symbol;
      num -= romanSymbols[i].roman;
    }
  }

  return result;
}

// Uncomment the following line to test with input 36
console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman;
