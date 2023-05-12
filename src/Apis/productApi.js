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

	mainList() {
		return Axios.get(PATH);
	},

	detail(id) {
		return Axios.get(PATH + '/detail', {
			params: { prod_idx: id },
		});
	},

	likedBtn(prod_idx) {
		return Axios.post(PATH + '/like', {
			prod_idx,
		});
	},
};
export default ProductApi;
