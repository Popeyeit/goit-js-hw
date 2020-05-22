const countTotalSalary = function (employees) {
  const totalSalary = Object.values(employees);
  let total = 0;
  for (const value of totalSalary) {
    total += value;
  }
  return total;
};

// const countTotalSalary = function (employees) {
//     let total = 0
//     for (const key in employees) {
//         total += employees[key]
//     }
//     return total
// };

// const countTotalSalary = function (employees) {
//     const entries = Object.entries(employees)
//     let total = 0
//     for (const entry of entries) {
//         total += entry[1]
//     }
//     return total

// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
