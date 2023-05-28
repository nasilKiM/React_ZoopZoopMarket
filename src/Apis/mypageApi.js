import { Axios } from './@core';
//
const PATH = '/api/user/my-page';

const MyPageApi = {
	myMainPage() {
		return Axios.get(PATH);
	},
	productList({ page, category }) {
		return Axios.get(PATH + '/product-list', { params: { page, category } });
	},
	likeProductList({ page }) {
		return Axios.get(PATH + '/like-product-list', {
			params: { page: page },
		});
	},
	accountBook({ page, category, start, end }) {
		return Axios.get(PATH, '/account-book', {
			params: { page, category, start, end },
		});
	},
};
export default MyPageApi;
