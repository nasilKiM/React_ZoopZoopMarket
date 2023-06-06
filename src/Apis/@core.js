import TokenService from 'Repository/TokenService';

import axios from 'axios';
import UserApi from './userApi';

export const MockAxios = axios.create({ baseURL: 'http://localhost:3004' });

export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
	headers: {
		Authorization: `Bearer ${TokenService.getToken()}`,
	},
});

Axios.interceptors.request.use(
	config => {
		const token = TokenService.getToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

Axios.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		if (error.response.status === 403) {
			TokenService.removeToken();
			await UserApi.logout();
		}
		const originalRequest = error.config;

		if (error.response.status === 417 && !originalRequest._retry) {
			originalRequest._retry = true;
			const res = await UserApi.refreshToken();
			if (res.status === 200) {
				TokenService.setToken(res.data.accessToken);
				return Axios(originalRequest);
			}
		}
		return Promise.reject(error);
	},
);
