'use strict';
let input = 0;
let total = 0;



for (let i; i => 0;) {

    input = prompt('Введите число');
    const counterInput = Number(input)
    i = +counterInput
    if (!isNaN(counterInput)) {
        total += i
    }

    if (isNaN(counterInput)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    console.log(typeof counterInput);
    if (counterInput === 0) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
}
console.log(total);

// do {
//     input = prompt('Введите число');
//     let counterInput = Number(input)
//     console.log(typeof input);
//     let i;
//     i = +counterInput;
//     total += i;
//     if (isNaN(counterInput)) {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     }

//     if (counterInput === 0) {
//         alert(`Общая сумма чисел равна ${total}`);
//         break;
//     }

// } while (input > 0);