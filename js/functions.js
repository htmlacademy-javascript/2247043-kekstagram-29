const checkString = (str, lettersLimit) => str.length <= lettersLimit;

const isPalindrome = (str) => {
  const editedStr = str.replaceAll(' ', '').toLowerCase();

  let newStr = '';

  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }

  return editedStr === newStr;
};

const returnIntegers = (str) => {
    let newString = '';

  str = str.toString();

  for (let i = 0; i < str.length; i++) {
     newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
  }

  return parseInt(newString, 10);
};

