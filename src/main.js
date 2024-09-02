import axios from "axios"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderPhoto , divEl} from   "./js/render-function";
import { fetchPhoto , PER_PAGE } from "./js/pixabay-api";


const formEl = document.querySelector('.search-form');
const inputEl = formEl.querySelector('input');
const loaderEl = document.querySelector('.loader');
const loaderMoreEl = document.querySelector(".button-loader");
let valueInput = "";
let ceurentPage = 0;
let totalPages = 0;

formEl.addEventListener('submit', async (evn) => {
    evn.preventDefault();
    divEl.innerHTML = "";
    loaderEl.classList.remove("is-hidden");
    loaderMoreEl.classList.add("is-hidden");
    valueInput = inputEl.value.trim();
    ceurentPage = 1;
    try {
        const data = await fetchPhoto(valueInput , ceurentPage);
        if (data.total === 0 || valueInput === "") {
            throw new Error("Sorry, there are no images matching your search query. Please try again!")
        }
        renderPhoto(data);
        const lightbox = new SimpleLightbox('.container-img a');
        lightbox.refresh();
        
        totalPages = Math.ceil(data.total / PER_PAGE);
        if (totalPages > 1) {
            loaderMoreEl.classList.remove('is-hidden');
            
        } else {
            iziToast.show({ title: "We're sorry, but you've reached the end of search results.", position: 'topRight' });
        }
    } catch(error) {
        iziToast.show({ title: error.message, position: 'topRight', backgroundColor: 'red' }); 
    }

    formEl.reset();    
    loaderEl.classList.add("is-hidden");
});
const smoothScrollOnLoadMore = () => {
    const lastElementRender = document.querySelector('.container-img:last-child');
    const rect = lastElementRender.getBoundingClientRect().height;
    const scrollHeight = rect * 2;
    window.scrollBy({
        top: scrollHeight ,
        left: 100,
        behavior: "smooth",
    });

}
loaderMoreEl.addEventListener('click', async function onLoadMorePressed() {
    try {
        ceurentPage += 1;
        const data = await fetchPhoto(valueInput , ceurentPage);
        renderPhoto(data);
        const lightbox = new SimpleLightbox('.container-img a');
        lightbox.refresh();
        

        smoothScrollOnLoadMore();

        if (ceurentPage >= totalPages) {
            loaderMoreEl.classList.add('is-hidden');
            loaderMoreEl.removeEventListener('click', onLoadMorePressed);
            iziToast.show({ title: "We're sorry, but you've reached the end of search results.", position: 'topRight' });
    }
    } catch(error) {
        
    }
    
});