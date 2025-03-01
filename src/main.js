import { fetchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputUserData = document.querySelector(".search-images");
const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const gif = document.querySelector(".loader")

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
    gif.style.display = "inline-block";

    gallery.innerHTML = "";
    inputUserData.value = "";


    try {
        fetchImages(query);
    } catch (error) {
        console.error("Error fetching images:", error);
        iziToast.error({
            title: "Error",
            message: "Something went wrong!",
            position: "topRight",
        });
    } finally {

        gif.style.display = "none";
    }
});