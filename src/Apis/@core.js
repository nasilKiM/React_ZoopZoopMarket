import TokenService from 'Repository/TokenService';
import axios from 'axios';

//테스트용
export default axios.create({ baseURL: 'http://localhost:3004' });

// 실제 백엔드 연결용
export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
});

// Axios 라이브러리를 사용하여 HTTP 요청을 보낼 때,
// 인터셉터를 사용하여 요청과 응답을 가로채고 수정하는 기능을 구현

// 요청을 보내기 전에 호출되는 인터셉터를 등록
// 1번째 콜백함수 첫 번째 콜백 함수는 요청을 수정하고 변환된 요청(config) 객체를 반환합니다.
// 이 함수에서는 TokenService.getToken() 함수를 사용하여 로그인한 사용자의 토큰을 가져와 요청 헤더에 'Authorization' 속성을 추가합니다. 이 속성 값으로 'Bearer <token>' 형식으로 토큰을 설정합니다.
// 그리고 변환된 요청(config) 객체를 반환합니다

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

// 토큰만료되었을때 (아직 사용x)
Axios.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;
			const res = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/user/jwtRefresh`,
			);
			if (res.status === 200) {
				TokenService.setToken(res.data.accessToken);
				return Axios(originalRequest);
			}
		}
		return Promise.reject(error);
	},
);
