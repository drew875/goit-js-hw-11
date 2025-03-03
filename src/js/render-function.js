import { searchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector("form");
const gallery = document.querySelector(".gallery");
form.style.width = "300px";
form.style.margin = "0 auto";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.margin = "0 auto";
gallery.style.justifyContent = "center";



export function renderGallery(images) {
    const gallery = document.querySelector(".gallery");

    if (!gallery) {
        console.error("Галерея не найдена");
        return;
    }

    gallery.innerHTML = images.map(image => `
        <div class="image-container">
            <a href="${image.largeImageURL}" data-lightbox="gallery">
                <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <p>❤️ ${image.likes} | 👁 ${image.views} | ⬇️ ${image.downloads}</p>
        </div>
    `).join("");


    searchImages(response.data)
    return;
    // Обновляем SimpleLightbox после вставки новой разметки
    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
    lightbox.refresh();

}

