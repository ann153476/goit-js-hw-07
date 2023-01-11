import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");


const markup = galleryItems
.map((galleryItem) =>
 `<a class="gallery__item" href="${galleryItem.original}">
 <img class="gallery__image" 
 src="${galleryItem.preview}" 
 data-source="${galleryItem.description}"
 alt="${galleryItem.description}" />
</a>`).join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  function imgClick (event){
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    };
    let gallery = new SimpleLightbox('.gallery a',
    {captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",}
    );
    gallery.on('show.simplelightbox', function () {
      
    })
  //     console.log(event.target);
  //     console.log(event.target.dataset.source);

  //  const markup = `<div class="signature">
  //  ${event.target.dataset.source}</div>`;

  //    event.target.insertAdjacentElement("afterend", markup);   
  }

      


  gallery.addEventListener('click', imgClick );


	

