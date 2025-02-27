import { fetchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputUserData = document.querySelector(".search-images");
const btn = document.querySelector(".start");

btn.addEventListener("click", () => {
    const query = inputUserData.value.trim();
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query!",
            position: "topRight",
        });
        return;
    }
    fetchImages(query);
});