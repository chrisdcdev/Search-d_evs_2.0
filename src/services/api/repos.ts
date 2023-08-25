import axios from "axios";

export const getUserRepositories = axios.create({
    baseURL: "https://api.github.com/users",
})