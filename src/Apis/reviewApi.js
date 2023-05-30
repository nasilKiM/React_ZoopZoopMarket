import { Axios } from './@core';

const PATH = '/api/review';

const ReviewApi = {
	reviewList() {
		return Axios.get(PATH, {
			params: {
				page: 1,
			},
		});
	},

	reviewDetail(idx) {
		return Axios.get(PATH + '/get', {
			params: {
				review_idx: idx,
			},
		});
	},

	editReview(data, idx) {
		return Axios.patch(PATH, data, {
			headers: { 'Content-Type': 'multipart/form-data' },
			params: { review_idx: idx },
		});
	},

	deleteReview(idx) {
		return Axios.delete(PATH, {
			params: { review_idx: idx },
		});
	},

	// editReview({ title, content, ondo, img_url, main_url, images }) {
	// 	return Axios.patch(
	// 		PATH,
	// 		{ title, content, ondo, img_url, main_url, images },
	// 		{
	// 			headers: { 'Content-Type': 'multipart/form-data' },
	// 		},
	// 	);
	// },
};
export default ReviewApi;
