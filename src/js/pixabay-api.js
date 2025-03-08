import axios from "axios";
import iziToast from "izitoast";


const MY_KEY = "42897935-d12608076f0478c23c9bb15ea";
const BASE_URL = "https://pixabay.com/api/";

export async function searchImage(value) {
    try {
        const c = await axios.get(BASE_URL, {
            params: {
                key: MY_KEY,
                q: value,
                safesearch: false,
                page: 1,
                per_page: 40,
            }
        })
        return c.data;
    } catch (err) {
        console.log("server error");
        iziToast.show({
            title: 'Error',
            message: 'server error',
            titleColor: 'red',
            messageSize: '20px',
            backgroundColor: 'pink',
            theme: 'light', // dark
            color: 'red', // blue, red, green, yellow
        });
        return null;
    }
}