import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

const markup = galleryItems
.map((galleryItem) =>
 `<a class="gallery__item" href="${galleryItem.original}">
 <img class="gallery__image" 
 src="${galleryItem.preview}" 
 alt="${galleryItem.description}" />
</a>`).join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  function imgClick (event){
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    };
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});
}


  gallery.addEventListener('click', imgClick );

console.log(galleryItems);
