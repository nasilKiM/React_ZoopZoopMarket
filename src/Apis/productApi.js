import { Axios } from './@core';

const PATH = '/api/product';

const ProductApi = {
	registerPost(data) {
		return Axios.post(PATH, data, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	},

	editPost(data) {
		return Axios.patch(PATH, data, {
			headers: { 'Content-Type': 'multipart/form-data' },
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

	deletePost(prod_idx) {
		return Axios.delete(PATH, {
			params: { prod_idx },
		});
	},

	getRecent() {
		return Axios.get(PATH + '/viewed-list', {});
	},

	addRecent(prod_idx) {
		return Axios.post(PATH + '/viewed-list', {
			prod_idx,
		});
	},
	deleteRecentList(prod_idx) {
		return Axios.delete(PATH + '/viewed-list', { params: { prod_idx } });
	},

	searchItems(page, searchWord, selected) {
		return Axios.get(PATH + '/search', {
			params: {
				category: selected,
				keyword: searchWord,
				page: page,
			},
		});
	},

	soldOut(prod_idx, token) {
		return Axios.post(PATH + '/sale-complete', {
			prod_idx,
			token,
		});
	},

	searchMarket(keyword, start, end) {
		return Axios.get(PATH + '/quote', {
			params: {
				keyword: keyword,
				start: start,
				end: end,
			},
		});
	},
};
export default ProductApi;
