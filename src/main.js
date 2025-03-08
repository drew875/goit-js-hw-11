import { searchImage } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderImages } from "./js/render-functions";

const loaderImage = document.querySelector(".loader");
const a = document.querySelector("form");
const b = document.querySelector(".searchInputValue")
a.style.width = "300px";
a.style.margin = "0 auto";
a.style.borderRadius = "5px";



a.addEventListener("submit", async (e) => {
    e.preventDefault();


    loaderImage.style.display = "inline-block";
    const value = b.value.trim();
    const result = await searchImage(value);
    if (!value) {
        console.log("Enter a value");
        iziToast.show({
            title: 'Warning',
            message: 'Please enter a search query!',
            titleColor: 'orange',
            messageSize: '20px',
            backgroundColor: 'yellow',
            theme: 'light',
            color: 'black',
        });
        return;
    }
    console.log(result);
    if (!result || !result.hits || result.hits.length === 0) {
        console.log("❌ No images found! iziToast should appear.");
        iziToast.show
            ({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                titleColor: 'red',
                messageSize: '20px',
                backgroundColor: 'pink',
                theme: 'light', // dark
                color: 'red', // blue, red, green, yellow
            });
        return;
    }
    renderImages(result.hits);
    loaderImage.style.display = "none";
});