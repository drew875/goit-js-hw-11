import axios from "axios";
import { renderGallery } from './render-function.js'; // Добавляем импорт



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
            renderGallery(response.data.hits);
        })
        .catch(error => console.log(error));
}
