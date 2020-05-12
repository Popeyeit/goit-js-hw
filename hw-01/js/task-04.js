'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let buyDroid = prompt('Сколько дроидов вы хотите купить?', '');
console.log(typeof buyDroid)
buyDroid = (Number(buyDroid));
let message;
let totalPrice;

if (buyDroid === 0) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = buyDroid * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  }
  if (totalPrice < credits) {
    message = `Вы купили ${buyDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
  }
}

alert(message);

// message = totalPrice > credits ? 'Недостаточно средств на счету!' : `Вы купили ${buyDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`