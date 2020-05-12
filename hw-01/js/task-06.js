'use strict';
let input;
let total = 0;

// for (let i = 0; i => 0; i = +input) {
//   total += i;
//   input = Number(input);
//   input = prompt('Введите число');
//   console.log(typeof input);

//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }
// }

do {
  let i = 0;
  input = prompt('Введите число');
  i = +input;
  total += i;
  console.log(typeof input);
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
} while (input !== null);

console.log(total);
