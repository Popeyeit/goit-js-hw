import galleryItems from './gallery-items.js';
import {
    template
} from './template.js'


const listRef = document.querySelector('.js-gallery')
const lightBoxRef = document.querySelector('.js-lightbox')
const overlayImgRef = document.querySelector('.lightbox__image')
const overlayBtnRef = document.querySelector('button[data-action="close-lightbox"]')
const contentRef = document.querySelector('.lightbox__content')

listRef.addEventListener('click', handleClickOpen)

const allLiGallery = galleryItems.map((item) => {
    const li = template(
        item
    )
    return li
}).join('')

listRef.insertAdjacentHTML('beforeend', allLiGallery)

let currentImg = ''

function handleClickOpen(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    }
    event.preventDefault()
    overlayBtnRef.addEventListener('click',
        handleCloseModal)
    contentRef.addEventListener('click', handleCloseOverlay)
    window.addEventListener('keydown', hadleKeydown)
    window.addEventListener('keydown', changeImage)
    lightBoxRef.classList.add('is-open')
    const {
        source
    } = event.target.dataset
    overlayImgRef.src = source
    currentImg = event.target
    console.log(event.target);
}

function changeImage(event) {
    if (event.code === 'ArrowRight' || event.code === 'KeyD' && currentImg.closest('li').nextSibling) {
        toRight()
        console.log(event.code);
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA' && currentImg.closest('li').previousSibling) {
        toLeft()
        console.log(event.code);
    }
}

function toLeft() {
    const leftImg = currentImg.closest('li').previousSibling.querySelector('img')
    const {
        source: sourceLeft
    } = leftImg.dataset

    overlayImgRef.src = sourceLeft
    currentImg = leftImg
}

function toRight() {
    const rightImg = currentImg.closest('li').nextSibling.querySelector('img')
    const {
        source: sourceRight
    } = rightImg.dataset

    {
        overlayImgRef.src = sourceRight
        currentImg = rightImg
    }
}

function handleCloseOverlay(event) {
    if (event.currentTarget === event.target) {
        handleCloseModal()
    }
}

function handleCloseModal() {
    lightBoxRef.classList.remove('is-open')
    overlayImgRef.src = ''
    overlayBtnRef.removeEventListener('click',
        handleCloseModal)
    contentRef.removeEventListener('click', handleCloseOverlay)
    window.removeEventListener('keydown', hadleKeydown)
    window.removeEventListener('keydown', changeImage)
}

function hadleKeydown(event) {
    if (event.code === 'Escape') {
        handleCloseModal()
    }
}

// 
// 
// 
// 
// 


// const temp = document.querySelector('.template').innerHTML.trim()
// console.log(temp);
// if (event.target.value.trim())


// 
// 
// 
// 


// ----------------------------------------------------------ВТОРОЙ ВАРИАНТ С ИНДЕКСОМ

// const listRef = document.querySelector('.js-gallery')
// const lightBoxRef = document.querySelector('.js-lightbox')
// const overlayImgRef = document.querySelector('.lightbox__image')
// const overlayBtnRef = document.querySelector('button[data-action="close-lightbox"]')
// const contentRef = document.querySelector('.lightbox__content')

// listRef.addEventListener('click', handleClickOpen)

// const allLiGallery = galleryItems.map((item) => {
//     const li = template(
//         item
//     )
//     return li
// }).join('')

// listRef.insertAdjacentHTML('beforeend', allLiGallery)

// // let currentImgIdx = ''
// const arrayImgIdx = listRef.querySelectorAll('img')
// const arrayImgValue = [...arrayImgIdx]
// const arrayMapImg = arrayImgValue.map((item) => {
//     return item.dataset.source
// })
// let count = 0

// function handleClickOpen(event) {
//     event.preventDefault()
//     overlayBtnRef.addEventListener('click',
//         handleCloseModal)
//     contentRef.addEventListener('click', handleCloseOverlay)
//     window.addEventListener('keydown', hadleKeydown)
//     window.addEventListener('keydown', changeImage)
//     lightBoxRef.classList.add('is-open')
//     const {
//         source
//     } = event.target.dataset
//     overlayImgRef.src = source
//     count = arrayMapImg.indexOf(source)
// currentImgIdx = source
// }

//  ------------ поиск по индексу без счетчика.
// // function changeImage(event) {
// //     if (event.code === 'ArrowLeft') {
// //         const currentImg = arrayMapImg.indexOf(currentImgIdx)
// //         const leftImg = arrayMapImg[currentImg - 1]
// //         overlayImgRef.src = leftImg
// //         currentImgIdx = leftImg
// //     }

// //     if (event.code === 'ArrowRight') {
// //         const currentImg = arrayMapImg.indexOf(currentImgIdx)
// //         const rightImg = arrayMapImg[currentImg + 1]
// //         overlayImgRef.src = rightImg
// //         currentImgIdx = rightImg
// //     }

// // }
// ----------------- счетчик
// function changeImage(event) {
//     if (event.code === 'ArrowLeft' && count >= 0) {
//         overlayImgRef.src = arrayMapImg[count - 1]
//         count--
//     }

//     if (event.code === 'ArrowRight' && count < arrayMapImg.length) {
//         overlayImgRef.src = arrayMapImg[count + 1]
//         count++
//     }
// }


// function handleCloseOverlay(event) {
//     if (event.currentTarget === event.target) {
//         handleCloseModal()
//     }
// }

// function handleCloseModal() {
//     lightBoxRef.classList.remove('is-open')
//     overlayImgRef.src = ''
//     overlayBtnRef.removeEventListener('click',
//         handleCloseModal)
//     contentRef.removeEventListener('click', handleCloseOverlay)
//     window.removeEventListener('keydown', hadleKeydown)
//     window.removeEventListener('keydown', changeImage)
// }

// function hadleKeydown(event) {
//     if (event.code === 'Escape') {
//         handleCloseModal()
//     }
// }

// 
// 
// const listRef = document.querySelector('.js-gallery')
// const lightBoxRef = document.querySelector('.js-lightbox')
// const overlayImgRef = document.querySelector('.lightbox__image')
// const overlayBtnRef = document.querySelector('button[data-action="close-lightbox"]')
// const contentRef = document.querySelector('.lightbox__content')

// listRef.addEventListener('click', handleClickOpen)

// const allLiGallery = galleryItems.map((item) => {
//     const li = template(
//         item
//     )
//     return li
// }).join('')

// listRef.insertAdjacentHTML('beforeend', allLiGallery)


// // let currentImgIdx = ''
// const arrayImgIdx = listRef.querySelectorAll('img')
// const arrayImgValue = [...arrayImgIdx]
// const arrayMapImg = arrayImgValue.map((item) => {
//     return item.dataset.source
// })
// let countIdx = 0

// function handleClickOpen(event) {
//     if (event.target.nodeName !== 'IMG') {
//         return
//     }
//     event.preventDefault()
//     overlayBtnRef.addEventListener('click',
//         handleCloseModal)
//     contentRef.addEventListener('click', handleCloseOverlay)
//     window.addEventListener('keydown', hadleKeydown)
//     window.addEventListener('keydown', changeImage)
//     lightBoxRef.classList.add('is-open')
//     const {
//         source
//     } = event.target.dataset
//     overlayImgRef.src = source
//     countIdx = Number(event.target.dataset.index)

// }


// function changeImage(event) {
//     console.log(countIdx);
//     if (event.code === 'ArrowLeft' && countIdx >= 0) {
//         toLeft()
//     }

//     if (event.code === 'ArrowRight' && countIdx < arrayMapImg.length) {
//         toRight()
//     }
// }

// function toLeft() {
//     overlayImgRef.src = galleryItems[countIdx - 1].original
//     countIdx--
// }

// function toRight() {
//     overlayImgRef.src = galleryItems[countIdx + 1].original
//     countIdx++
// }



// function handleCloseOverlay(event) {
//     if (event.currentTarget === event.target) {
//         handleCloseModal()
//     }
// }

// function handleCloseModal() {
//     lightBoxRef.classList.remove('is-open')
//     overlayImgRef.src = ''
//     overlayBtnRef.removeEventListener('click',
//         handleCloseModal)
//     contentRef.removeEventListener('click', handleCloseOverlay)
//     window.removeEventListener('keydown', hadleKeydown)
//     window.removeEventListener('keydown', changeImage)
// }

// function hadleKeydown(event) {
//     if (event.code === 'Escape') {
//         handleCloseModal()
//     }
// }


// 
// 
// 


const options = {
    rootMargin: '400px'
}

function callback(img) {
    const intrObs = new IntersectionObserver(test, options)
    intrObs.observe(img)

    function test(entries, observer) {
        entries.forEach(img => {
            if (img.isIntersecting) {
                const {
                    sourcesmall
                } = img.target.dataset;
                img.target.src = sourcesmall
                observer.disconnect()
            }
        })
    }
}
const arrayImg = document.querySelectorAll('.js-gallery img')
arrayImg.forEach(img => callback(img))