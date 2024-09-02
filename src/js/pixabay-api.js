import axios from "axios"

const API_KEY = '43780591-6ab37bb22e1af39025cb54e89';
axios.defaults.baseURL = 'https://pixabay.com/api/'
export const PER_PAGE = 15;

export function fetchPhoto(valuePhoto , newPage) {
    const searchParams = {
        per_page: PER_PAGE,
        page: newPage,
        key: API_KEY,
        q: valuePhoto,
        safesearch: true,
        image_type: 'photo',
        orientation: 'horizontal',
    }
    return axios.get("", { params: searchParams }).then(response => {
        return response.data;
    })
}
