const checkString = (str, lettersLimit) => str.length <= lettersLimit;

checkString('проверяемая строка', 20);

const isPalindrome = (str) => {
  const editedStr = str.replaceAll(' ', '').toLowerCase();

  let newStr = '';

  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }

  return editedStr === newStr;
};
// eslint-disable-next-line no-constant-condition
isPalindrome(('Лёша на полке клопа нашёл ') ? 'Палиндром' : 'Не палиндром');

const returnIntegers = (str) => {
  let newString = '';

  str = str.toString();

  for (let i = 0; i < str.length; i++) {
    newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
  }

  return parseInt(newString, 10);
};

returnIntegers('2023 год');
returnIntegers('ECMAScript 2022');
returnIntegers('1 кефир, 0.5 батона');
(returnIntegers('агент 007'));
returnIntegers(2013);
returnIntegers(-1);
returnIntegers(1.5);
