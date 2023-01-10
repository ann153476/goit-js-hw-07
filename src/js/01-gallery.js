import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector(".gallery");

const markup = galleryItems
.map((galleryItem) =>
 `<div class="gallery__item">
 <a class="gallery__link" href="large-image.jpg">
 <img class="gallery__image" src="${galleryItem.preview}"
  data-source="${galleryItem.original}" 
  alt="${galleryItem.description}
    width="150"></a></div>`).join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  function imgClick (event){
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    };
    const source = event.target.dataset.source;
const instance = basicLightbox.create(
`<img src=${source}  width="800" height="600">`);
instance.show();
 }

 gallery.addEventListener('click', imgClick );

 console.log(galleryItems);



