const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4,
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3,
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7,
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2,
    },
];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total = 0;
//   for (const key of allProdcuts) {
//     if (key.name === productName) {
//       total = key.price * key.quantity;
//     }
//   }

//   return total;
// };
const calculateTotalPrice = function (allProdcuts, productName) {
    let total = 0;
    for (let i = 0; i < allProdcuts.length; i++) {
        if (allProdcuts[i].name === productName) {
            total = allProdcuts[i].price * allProdcuts[i].quantity;
        }
    }

    return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//     которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.