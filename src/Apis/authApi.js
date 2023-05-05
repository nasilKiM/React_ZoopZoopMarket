import { Axios } from './@core';

const PATH = '/user';

const AuthApi = {
	async login(email, password) {
		const res = await Axios.post(PATH + '/login', { email, password });
		return res.data;
	},

	signup(email, password) {
		return Axios.post(PATH + '/sign', { email, password });
	},

	// async jwtRefresh() {
	// 	const res = await Axios.post(PATH + '/jwtRefresh');
	// 	return res.data;
	// },

	async logout() {
		const res = await Axios.post(PATH + '/logout');
		return res.data;
	},
};
export default AuthApi;
