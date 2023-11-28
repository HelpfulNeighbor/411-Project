import axios from 'axios';

const api = axios.create({
    //baseURL: "https://localhost:44357"
    baseURL:"https://helpfulneighborweb20230917140513.azurewebsites.net/"
})

export default api;