// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить,
//         коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div# boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
// Размеры самого первого div - 30 px на 30 px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10 px
// Создай функцию destroyBoxes(), которая очищает div# boxes.
const divRef = document.querySelector('#boxes')
const destroyRef = document.querySelector('button[data-action="destroy"]')
const inputRef = document.querySelector('input[type="number"]')
const renderRef = document.querySelector('button[data-action="render"]')

let numberValue = 20
const templateDiv = number => {
    const arrayDiv = []
    for (let i = 0; i < number; i++) {
        const rgbArray = addArrayRgb()
        addNumberValue()
        const div = `<div style = "background-color: rgb(${rgbArray}); width: ${numberValue}px; height: ${numberValue}px;"> </div>`
        arrayDiv.push(div)
    }
    return arrayDiv
}
const addNumberValue = () => {

    for (let i = 0; i < 1; i++) {
        numberValue += 10
    }
    return numberValue
}
const addArrayRgb = () => {
    const rgbValues = []
    for (let i = 0; i < 3; i++) {
        const itemRgb = getRandomIntInclusive(0, 255)
        rgbValues.push(itemRgb)
    }
    return rgbValues
}

const createBoxes = amount => {
    const arrayDiv = templateDiv(amount)
    const stringsDiv = arrayDiv.join('')
    return stringsDiv
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleRender = (event) => {
    const resEventValue = inputRef.value
    const resEventValueNum = Number(resEventValue)
    const div = createBoxes(resEventValueNum)
    divRef.insertAdjacentHTML('beforeend', div)
}
const handleDestroy = (event) => {
    divRef.innerHTML = ''
    numberValue = 20
}

renderRef.addEventListener('click', handleRender)
destroyRef.addEventListener('click', handleDestroy)