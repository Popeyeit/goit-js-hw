// debugger

const findLongestWord = string => {
  const array = string.split(' ');
  let longerWord = array[0];

  for (let i = 1; i < array.length; i++) {
    const longerWordLength = longerWord.length;
    if (array[i].length > longerWordLength) {
      longerWord = array[i];
    }
  }
  return longerWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
