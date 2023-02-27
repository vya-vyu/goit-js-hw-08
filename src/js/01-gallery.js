import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ description, original, preview }) =>
    {
       return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>` 
        
    }).join('');     
}



gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));``

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250 });
