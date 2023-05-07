import { Axios } from './@core';

const PATH = '/api/product';

const ProductApi = {
	register(title, price, description, category, region, tag, images) {
		return Axios.post(PATH, {
			title,
			price,
			description,
			category,
			region,
			tag,
			images,
		});
	},
	mainList({ region, usedProduct, freeProduct }) {
		return Axios.get(PATH, { region, usedProduct, freeProduct });
	},

	signup(email, password) {
		return Axios.post(PATH + '/sign', { email, password });
	},

	async logout() {
		const res = await Axios.post(PATH + '/logout');
		return res.data;
	},

	// async jwtRefresh() {
	// 	const res = await Axios.post(PATH + '/jwtRefresh');
	// 	return res.data;
	// },
};
export default ProductApi;
