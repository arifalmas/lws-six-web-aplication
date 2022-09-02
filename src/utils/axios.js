import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lws-json-server-for-task-6.herokuapp.com",
});

export default axiosInstance;
