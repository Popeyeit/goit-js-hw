const ulRef = document.querySelector('#categories')
const liCategoriesRef = ulRef.querySelectorAll('.item')
console.log(`В списке ${liCategoriesRef.length} категории`);
const fnShow = (text, pseudoArray) => {
  console.log(`Категория: ${text.textContent}. Количество элементов: ${pseudoArray.length}`);
}
const res = liCategoriesRef.forEach(item => {
  console.log(item);
  const h2Ref = item.querySelector('h2')
  const allLiRef = item.querySelectorAll('li')
  console.log(allLiRef);
  fnShow(h2Ref, allLiRef)
})

// const test = document.querySelector('#categories .item h2')
// console.log(test.textContent);