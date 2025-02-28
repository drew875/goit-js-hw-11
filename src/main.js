import { fetchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputUserData = document.querySelector(".search-images");
const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = inputUserData.value.trim();
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query!",
            position: "topRight",
        });
        return;
    }
    gallery.innerHTML = "";
    inputUserData.value = "";
    fetchImages(query);
});