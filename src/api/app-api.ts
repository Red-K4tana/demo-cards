import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search',
    withCredentials: false,
})

export const appAPI = {
    //запрос для получения данных с сервера
    getImage() {
        return instance.get<Array<ImgServerType>>('?limit=5&page=1&order=DESC')
    }

}

//тип карточек, пришедших с сервера
export type ImgServerType = {
    id: string,
    url: string,
    width: number,
    height: number,
}