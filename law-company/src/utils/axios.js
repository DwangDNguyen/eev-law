import axios from "axios";

export const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/post`,
});

export const contactApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/message`,
});

export const userApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/user`,
});
