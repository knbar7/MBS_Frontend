import { API_CONFIG } from "./config"


export const getFromDb = (key) => {
    return fetch(API_CONFIG.baseUrl + "/" + key)
    .then((response) => response.json());
};