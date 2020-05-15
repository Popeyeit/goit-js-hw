'use strict';
let input = 0;
let total = 0;

// for (let i = 0; i >= 0; ) {
//   input = prompt('Введите число');
//   const counterInput = Number(input);
//   console.log(counterInput);
//   if (!isNaN(counterInput)) {
//     total += counterInput;
//   }

//   if (isNaN(counterInput)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }
//   console.log(typeof counterInput);
//   if (counterInput === 0) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
// }

// console.log(total);

do {
  input = prompt('Введите число');
  input = Number(input);
  console.log(typeof input);
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  total += input;

  if (input === 0) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
} while (input !== 0);

// for (let i = 0; i >= 0; ) {
//   input = prompt('Введите число');
//   console.log(input);
//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }
//   total += Number(input);
//   console.log(typeof input);
//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
// }
// console.log(total);
