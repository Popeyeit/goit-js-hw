const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const fnAdd = ingredients.map(item => {
    const liRef = document.createElement('li')
    liRef.textContent = `${item}`
    return liRef
})
console.log(fnAdd);
const ulRef = document.querySelector('#ingredients')
ulRef.append(...fnAdd)