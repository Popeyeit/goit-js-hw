let counterValue = 0
const numberValue = document.querySelector('#value')
console.log(numberValue);
const inrementNumber = event => {
    counterValue += 1
    numberValue.textContent = counterValue
}
const decrementNumber = event => {
    counterValue -= 1
    numberValue.textContent = counterValue
}

const counterPlus = document.querySelector('#counter button[data-action="increment"]').addEventListener('click', inrementNumber)
const cunterMinus = document.querySelector('#counter button[data-action="decrement"]').addEventListener('click', decrementNumber)