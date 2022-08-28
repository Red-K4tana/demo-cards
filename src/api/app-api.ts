import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search',
    withCredentials: false,
})

export const appAPI = {
    getImage() {
        return instance.get('?limit=4&page=1&order=DESC')
    }

}