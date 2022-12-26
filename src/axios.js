import axios from "axios";

// baseURLリクエスト
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
