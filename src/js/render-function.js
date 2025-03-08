import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {
    const galleryContainer = document.querySelector(".gallery");
    galleryContainer.style.display = "flex";
    galleryContainer.style.flexWrap = "wrap";
    galleryContainer.style.justifyContent = "center";
    galleryContainer.style.margin = "0 auto";
    galleryContainer.style.gap = "15px";




    const markup = images.map((img) =>
        `<div class="gallery-item">
            <a href ="${img.largeImageURL}"data-lightbox="gallery">
                    <img src="${img.webformatURL}" alt="${img.tags}">
                    </a>
                    <p>Likes: ${img.likes},Views:${img.views},Comments:${img.comments},Downloads:${img.downloads}</p>
                </div>`
    )
        .join("");
    galleryContainer.innerHTML = markup;
    let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    lightbox.refresh();
}
