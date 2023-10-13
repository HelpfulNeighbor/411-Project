import axios from 'axios';

const api = axios.create({
  baseURL: "https://localhost:44357"
});

export default api;