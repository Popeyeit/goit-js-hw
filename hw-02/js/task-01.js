// const logItems = function () {
//   const array = Array.from(arguments);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       console.log(`${j + 1} - ${array[i][j]}`);
//     }
//   }
// };

const logItems = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i+1} - ${array[i]}`)
  }
};





/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);