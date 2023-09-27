const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let result = "";
  //1. Given expr is string
  //Break array of one sting ->array of strings of 10 digits each: '0010101010', '0000000010',...
  for(let i = 0; i < expr.length; i += 10){
      let str10digits = expr.slice(i, i + 10);
      arr.push(str10digits);
  }
  //2. if value is '**********' in array of strings of 10 digits, add to result ' ':
  for(let i = 0; i < arr.length; i++){
      let str = arr[i];
      if(str === "**********"){
          result += " ";
          continue;//skip the value of '**********'
      }

      let strDotOrDash = "";
    //3.Now str excludes "**********". Go through each str, dividing them by 2 to check if it str have . or -
      for(let i = 0; i < str.length; i += 2){
          if(str.slice(i, i + 2) === "10"){
              strDotOrDash += '.';
          }else if (str.slice(i, i + 2) === "11"){
            strDotOrDash += '-';
          }
      }
      //4.
      result += MORSE_TABLE[strDotOrDash];
  }

  return result;
}

module.exports = {
    decode
}