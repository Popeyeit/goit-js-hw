const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const addNewValue = () => {
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  const userArray = Object.keys(user);
  for (const key of userArray) {
    console.log(`${key}: ${user[key]}`);
  }
};
addNewValue();
// console.log(user);

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of