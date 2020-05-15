// debugger
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true
    }
    return false
};

const isLoginUnique = function (allLogins, login) {
    const isNameUnique = allLogins.includes(login)
    if (isNameUnique) {
        return isNameUnique
    }
    return isNameUnique
};

const addLogin = function (allLogins, login) {
    const loginValid = isLoginValid(login)
    if (!loginValid) {
        return 'oшибка! Логин должен быть от 4 до 16 символов'
    }
    const loginUnique = isLoginUnique(allLogins, login)
    if (loginUnique) {
        return 'Такой логин уже используется!'
    }
    logins.push(login)
    return 'Логин успешно добавлен!'
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'