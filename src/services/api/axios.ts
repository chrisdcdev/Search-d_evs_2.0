import axios from "axios";

export const getUserName = axios.create({
    baseURL: "https://api.github.com/users",
})