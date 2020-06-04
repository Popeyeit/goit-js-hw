export const template = function ({
  preview,
  original,
  description
}) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src=""
      data-sourcesmall = "${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}


//  {
//    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
//    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
//    description: 'Hokkaido Flower',
//  },