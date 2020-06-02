// Напиши скрипт, который реагирует на изменение
// значения input# font - size - control(событие input) и изменяет инлайн - стиль span# text
// обновляя свойство font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.
const rangeInputRef = document.querySelector('#font-size-control')
const inputRef = document.querySelector('#text')
inputRef.style.fontSize = '22px'
const handleInputRange = (event) => {
    const eventValue = event.target.value
    inputRef.style.fontSize = `${eventValue}px`
}

rangeInputRef.addEventListener('input', handleInputRange)