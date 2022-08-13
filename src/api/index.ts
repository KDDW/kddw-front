import axios from "axios";
import { env } from "../global/constants/env";
import { StorageKeys } from "../global/constants/storageEnum";
import { storage } from "../utils/storage";

const api = axios.create({
	baseURL: env.BASE_URL_API,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(async (config) => {
	const token = storage.get(StorageKeys.TOKEN);
	if (token) {
		api.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
});

export { api };
