import axios from "axios";

const AxiosInstance = axios.create({
	baseURL: "http://192.168.1.2:3001/",
});

export default AxiosInstance;
