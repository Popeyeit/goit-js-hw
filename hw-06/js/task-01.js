const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

//--------------------------------------------------- TASK 1------------------------------------------------------------

// const getUserNames = names => {
//   return names.map((item) => item.name)
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//--------------------------------------------------- TASK 2------------------------------------------------------------

// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((item) => item.eyeColor === color)
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//--------------------------------------------------- TASK 3------------------------------------------------------------

// Получить массив имен пользователей по полу(поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users.filter((item) => item.gender === gender).map((item) => item.name)
// };

// const getUsersWithGender = (users, gender) => {
//   return users.reduce((acc, item) => {
//     item.gender === gender ? acc.push(item.name) : false
//     return acc
//   }, [])
// }

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//--------------------------------------------------- TASK 4------------------------------------------------------------

// Получить массив только неактивных пользователей(поле isActive).

// const getInactiveUsers = users => {
//   return users.filter((item) => !item.isActive)
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//--------------------------------------------------- TASK 5------------------------------------------------------------

// Получить пользоваля(не массив) по email(поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   return users.find((item) => item.email === email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//--------------------------------------------------- TASK 6------------------------------------------------------------

// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(item => {
//     return item.age > min && item.age < max;
//   });
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK 7

// Получить общую сумму баланса(поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   return users.reduce((sum, item) => {
//     sum += item.balance
//     return sum
//   }, 0)
// };

// console.log(calculateTotalBalance(users)); // 20916

//--------------------------------------------------- TASK 8------------------------------------------------------------

// Массив имен всех пользователей у которых есть друг с указанным именем.
// ************************** Пытаясь сломать себе мозг)))
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(item => {
//       return item.friends.some(item => item === friendName);
//     })
//     .map(item => item.name);
// };

// ***************** Нормальный вариант))
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(item => item.name);
// };
// // ***********************наркомания
//
// const getUsersWithFriend = function (users, friendName) {
//   const array = [];
//   for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < users[i].friends.length; j++) {
//       if (users[i].friends[j] === friendName) {
//         array.push(users[i].name);
//       }
//     }
//   }
//   return array;
// };

// const getUsersWithFriend = function (users, friendName) {
//   const array = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].friends.includes(friendName)) {
//       array.push(users[i].name);
//     }
//   }
//   return array;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//--------------------------------------------------- TASK 9------------------------------------------------------------

// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort((a, b) => {
//       return a.friends.length > b.friends.length ? 1 : -1;
//     })
//     .map(item => item.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//--------------------------------------------------- TASK 10------------------------------------------------------------

// Получить массив всех умений всех пользователей(поле skills),
//   при этом не должно быть повторяющихся умений и
// они должны быть отсортированы в алфавитном порядке.
//
// **********Незная о чудо способах*********

// skills: ['ex', 'culpa', 'nostrud'],

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((acc, item) => {
//       item.skills.forEach(item =>
//         acc.includes(item) ? console.log("don't find") : acc.push(item),
//       );
//       return acc;
//     }, [])
//     .sort();
// };
// -----------------************Читерство=)*************
// const getSortedUniqueSkills = users => {
//   return [...new Set(users.flatMap(user => user.skills))].sort();
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud'

// console.log('scientist', scientist);
// const res = scientist.map(elem => ({ ...elem, test: 'test' }))
