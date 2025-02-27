import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



export function renderGallery(images) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    images.forEach(image => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const link = document.createElement('a');
        link.href = image.largeImageURL;
        link.setAttribute("data-lightbox", "gallery");

        const img = document.createElement("img");
        img.src = image.webformatURL;
        img.alt = image.tags;

        const info = document.createElement("p");
        info.innerHTML = `Likes: ${image.likes}, Views: ${image.views}, Downloads ${image.downloads}`;

        link.append(img);
        container.append(link, info);
        gallery.append(container);
    });

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250
    });
    lightbox.refresh();
}