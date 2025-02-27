import axios from "axios";
import { renderGallery } from './render-function.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



export function fetchImages(query) {
    axios.get("https://pixabay.com/api/", {
        params: {
            key: "42897935-d12608076f0478c23c9bb15ea",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then(response => {
            if (response.data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "No images found for your search.",
                    position: "topRight",
                });
                return;
            }
            renderGallery(response.data.hits);
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Failed to fetch images. Try again later!",
                position: "topRight",
            });
            console.error(error);
        });
}