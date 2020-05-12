'use strict';
let input;
let total = 0;
input = (Number(input))

for (let i = 0; i >= 0 && i <= 99999999; i = +input) {
    input = prompt('Введите число');
    total += i;
    console.log(typeof input);

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }

}


console.log(total);

// if (input = (isNaN(input)) && typeof input === (isNaN)) {
//     alert('asdasd')
//     continue;
// }