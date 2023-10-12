// const API_URL = `${process.env.REACT_APP_API_BASE_URL}`
// console.log(API_URL);
// export { API_URL }

import axios from 'axios';

const api = axios.create({
  baseURL: "https://localhost:7232"
});

export default api;