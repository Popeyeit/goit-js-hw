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
}

function changeImage(event) {
    if (event.code === 'ArrowRight' && currentImg.closest('li').nextSibling) {
        toRight()
    }
    if (event.code === 'ArrowLeft' && currentImg.closest('li').previousSibling) {
        toLeft()

    }
    console.log(event.target);
    console.log(event.code);
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