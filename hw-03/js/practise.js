//-------------------------------------------SPREAD AND REST-------------------------------------//
// -----------------------------------Massive spread-------------------------//
// console.log(...[1, 2, 3, 4, 5, 6, 7, 8]);

// const array1 = [5, 5, 5, 6, 7, 8, 'tok', 'tip'];
// const array1Value = [...array1, 'Tom'];
// // console.log(array1Value);
// const array2 = ['Bob', 'Tim', 'Dron'];
// const array12Value = [...array1, ...array2];
// // console.log(array12Value);
// const arraySlice = [...array1, ...array2.slice(0, 1)];
// // console.log(arraySlice);

// ---------------------------------Object spread-----------------------//
// const obj = {
//     car: 'BMW',
//     price: 58000,
//     type: 'sport',
// }
// console.log(obj);

// // const copyObj = {
// //     ...obj
// // }
// // copyObj.car = 'Mersedes'
// // console.log(copyObj);

// const obj2 = {
//     house: 5,
//     street: '5 awe New',
//     city: 'New-York',
//     price: 10000000
// }
// console.log(obj2);
// const objInfo = {
//     ...obj,
//     name: 'Ajax',
//     ...obj2
// }
// console.log(objInfo);
//--------------------------------------------REST Function----------------------------//

// const array1 = [5, 5, 5, 6, 7, 8, 'tok', 'tip']

// const fn = (number, ...otherValues) => {
//     console.log(number);
//     console.log(otherValues);
// }
// fn(...array1)

// ---------------------------------------------Desctructuring object---------------------//

// const obj = {
//     car: 'BMW',
//     price: 58000,
//     type: 'sport',
//     animal: 'Monkey',
//     age: 12,
//     gender: 'male'
// }

// const {
//     car: copyCar = 'Mersedes',
//     price,
//     type,
//     // status = 'online'
//     ...otherKeys
// } = obj
// console.log(type);
// console.log(copyCar);
// console.log(otherKeys);
// // console.log(status);

// ---------------------------------------------Desctructuring object + REST---------------------//

// const obj = {
//   car: 'BMW',
//   price: 58000,
//   type: 'sport',
//   animal: 'Monkey',
//   age: 12,
//   gender: 'male'
// }
// console.log(obj);

// const fn = ({
//   car,
//   price,
//   type,
//   ...rest
// }) => {
//   console.log(rest);
//   console.log(car);
//   rest.animal = 'Dog'
//   console.log(rest);
// }

// fn(obj)

// ---------------------------------------------Desctructuring massive + REST---------------------//

// const array1 = [5, 8, 'tok', 'tip'];
// console.log(array1);
// // const [number, number1, ...rest] = array1;
// // console.log(rest);

// const fn = (number, ...other) => {
//   console.log(other);
//   console.log(number);
//   other[0] = 'pop';
// };
// fn(...array1);

// const fn = ([number, ...other]) => {
//   console.log(other);
//   console.log(number);
//   other[0] = 'pop';
// };
// fn(array1);

// ---------------------------------------------difficult type + REST---------------------//

//
//
//
//
//
//

// const obj = {
//     car: [{
//         name: 'BMW',
//         price: 58000,
//         type: 'sport'
//     }],

// }

// const obj2 = {}


// -------------------------------------------------------------//
// debugger;
// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [{
//     name: 'apples',
//     quantity: 200,
//     isFresh: true
//   },
//   {
//     name: 'grapes',
//     quantity: 150,
//     isFresh: false
//   },
//   {
//     name: 'bananas',
//     quantity: 100,
//     isFresh: true
//   },
// ];

// const freshFruits = filter(fruits, fruit => {
//   return fruit.isFresh;
// });
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// debugger
// const findBestEmployee = function (employees) {
//   let theBestEmployee = Object.keys(employees)[0];
//   let theBestStats = Object.values(employees)[0];
//   for (let [key, value] of Object.entries(employees)) {
//     if (theBestStats < value) {
//       theBestStats = value;
//       theBestEmployee = key;
//     }
//   }
//   return theBestEmployee;
// };
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );



// const Array1 = [1, 2, 3, 4, 5]
// const Array2 = ['tt', 'ee', 'yy']
// const array3 = [10, ...Array1, ...Array2, 'oo', 'kk']
// console.log(array3);


// const obj1 = {
//   name: 'Alex',
//   status: 'married',
//   age: 33,
//   car: 'BMW',
//   price: 20000,
//   color: 'black'
// }

// const {
//   name: namePartner = 'Dron',
//   status,
//   age,
//   money = 10000,
//   ...otherValues
// } = obj1
// // console.log(namePartner, status, age, money, );
// console.log(otherValues);

// // console.log(obj2);

// const createCounter = function () {
//     /*
//      * Локальная переменная privateValue доступна только в замыкании.
//      * Получить к ней доступ во внешнем коде невозможно.
//      */
//     let privateValue = 0;

//     const increment = function () {
//         privateValue += 1;
//         console.log(privateValue);
//         // console.log('a', a);
//         // console.log('b', b);
//     };
//     let a = 5

//     return increment

// };
// let b = 10
// const counterA = createCounter();
// counterA()
// counterA()
// createCounter()
// counterA()

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3



// const words = {
//     word: 'spoon',
//     color: 'white',
//     randomWord: 'squirell'
// }

// const obj = {
//     array: [5, 5, 5, 5]
// }
// console.log(obj.array);

// const fn = function (amount, b, c) {

//     const result = {
//         a: amount,
//         b,
//         c
//     }
//     return result
//     console.log(result);
// }
// const arrayTest = obj.array


// const deposit = function (amount) {
//     const result = fn(amount, words.word, words.color)
//     return obj.array = [...obj.array, result]

// }

// const widthdraw = function (amount) {
//     console.log(amount);
//     const result = fn(amount, words.word, words.randomWord)
//     obj.array = [...obj.array, result]
//     console.log(result);
// }


// const result = deposit(50)
// console.log(result === obj.array);
// console.log(result);
// 
// 
// 
// 
// const hotel = {
//     name: 'Resort hotel',
//     showThis() {


//         fn();
//         console.log('this in showThis: ', this);
//     },
// };
// const fn = () => {
//     /*
//      * Стрелки запоминают контекст во время объявления,
//      * из родительской области видимости
//      */
//     console.log('this in fn: ', this);
// };
// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}


// const obj = {
//     name: 'asdasd',
//     fn() {
//         console.log(this.name);
//     }


// }

// const greet = function (guest, stars, callback) {
//     callback()
//     return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = {
//     name: 'Resort Hotel'
// };
// const motel = {
//     name: 'Sunlight Motel'
// };

// console.log(greet.apply(hotel, ['Mango', 5, obj.fn]));
// // "Mango, wellcome to 5-star Resort Hotel!"

// console.log(greet.apply(motel, ['Poly', 4]));
// // "Poly, wellcome to 4-star Sunlight Motel!"