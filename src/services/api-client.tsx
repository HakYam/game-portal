import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cd3582e9343b4aea83f98b47a229eb0a"
  }
})