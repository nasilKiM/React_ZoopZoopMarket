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
};
export default ReviewApi;
