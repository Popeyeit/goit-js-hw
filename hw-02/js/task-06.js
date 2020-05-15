// debugger;
let input;
const numbers = [];
let total = 0;

const addNumbers = () => {
  do {
    input = prompt('Введите число');
    let isNumber = Number(input);
    if (isNaN(isNumber)) {
      alert('not number, try again');
      continue;
    }
    if (isNumber !== 0) {
      numbers.push(isNumber);
    }
  } while (input !== null);
  const totalResult = add(numbers);
  if (totalResult > 0) {
    return console.log(`Общая сумма чисел равна ${totalResult}`);
  }
};

const add = allNumbers => {
  for (const number of allNumbers) {
    total += number;
  }
  return total;
};

addNumbers();
