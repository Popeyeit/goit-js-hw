// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

//     <
//     input
// type = "text"
// id = "validation-input"
// data - length = "6"
// placeholder = "Введи 6 символов" /
//     >
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const inputRef = document.querySelector('#validation-input')

const handleBlurInput = (event) => {
    const dataLength = event.target.dataset.length
    const valueLength = event.target.value.length

    if (valueLength >= dataLength) {
        event.target.classList.remove('invalid')
        return event.target.classList.add('valid')
    }
    if (valueLength < dataLength) {
        event.target.classList.remove('valid')
        return event.target.classList.add('invalid')
    }
}
inputRef.addEventListener('blur', handleBlurInput)