import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const btn = document.querySelector(".start");
const inputUserData = document.querySelector("input");
const gallery = document.createElement("div");

gallery.classList.add("gallery");
document.body.append(gallery);

const loader = document.createElement("div");
loader.classList.add("ld-spinner", "ld-spin", "fullpage-loader");
loader.innerHTML = '<div></div><div></div><div></div>';
loader.style.display = "none"; // Спочатку ховаємо завантажувач
document.body.append(loader);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt", captionDelay: 250
});

btn.addEventListener("click", () => {

    if (!inputUserData.value.trim()) {
        iziToast.show({
            title: 'Error',
            message: 'write a letters',
            color: "red",
            position: "topRight"

        });
        return;
    }


    loader.style.display = "flex";

    axios.get("https://pixabay.com/api/", {
        params: {
            key: "42897935-d12608076f0478c23c9bb15ea",
            q: inputUserData.value.trim(),
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true

        }

    })


        .then(response => {
            gallery.innerHTML = "";

            if (response.data.hits.length === 0) {
                iziToast.show({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    color: "red",
                    position: "topRight"
                });
                return;
            }
            response.data.hits.forEach(image => {
                const containerActions = document.createElement("div");
                containerActions.classList.add("image-actions")

                const link = document.createElement('a');
                link.href = image.largeImageURL;

                const img = document.createElement("img");

                img.src = image.webformatURL;
                img.alt = image.tags;

                const info = document.createElement("p");
                info.innerHTML = `likes ${image.likes} views ${image.views} comments ${image.comments} downloads ${image.downloads}`;
                img.setAttribute("data-likes", image.likes);
                img.setAttribute("data-views", image.views);
                img.setAttribute("data-comments", image.comments);
                img.setAttribute("data-downloads", image.downloads);

                link.append(img);
                containerActions.append(link);
                containerActions.append(info);
                gallery.append(containerActions);
                console.log(response.data.hits);

            });
            lightbox.refresh();
        })
        .catch(error => console.log(error))
});