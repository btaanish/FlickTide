import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend.heroku.com/",
});

export default instance;
