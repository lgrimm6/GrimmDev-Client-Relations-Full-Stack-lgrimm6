import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/clients/login",
});

export default api;
