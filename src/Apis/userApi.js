import { Axios } from './@core';

const PATH = '/api/user';

const UserApi = {
	login({ email, pw }) {
		return Axios.post(PATH + '/login', { email, pw });
	},
	signup({ email, pw, nickName, phone, region }) {
		return Axios.post(PATH, { email, pw, nickName, phone, region });
	},
	checkEmail(email) {
		return Axios.get(PATH + '/check/email', { params: { email } });
	},
	checkNickname(nickname) {
		return Axios.get(PATH + '/check/nickname', {
			params: { nickname },
		});
	},
	logout() {
		return Axios.get(PATH + '/logout');
	},
	refreshToken() {
		return Axios.get(PATH + '/refreshToken');
	},
	userInfo() {
		return Axios.get(PATH + '/info');
	},
	userInfoEdit({ email, region, nickName, phone }) {
		return Axios.patch(PATH, {
			email,
			region,
			nickName,
			phone,
		});
	},
	//임시
	myItem({ page, category }) {
		return Axios.get(PATH + '/my-page/product-list', {
			page,
			category,
		});
	},
};
export default UserApi;
