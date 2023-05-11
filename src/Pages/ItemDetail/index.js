import { useEffect, useState } from 'react';

import SellerDetailPage from './SellerDetail/SellerDetail';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import { useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';

const ItemDetailPage = () => {
	const { idx } = useParams();
	const [state, setState] = useState('');
	console.log('************', state);

	const temp = async () => {
		try {
			const res = await ProductApi.detail(idx);
			setState(res);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		temp();
	}, []);

	const { isSeller } = state && state.data;

	return (
		<>
			{!isSeller ? (
				<BuyerDetailPage state={state} />
			) : (
				<SellerDetailPage state={state} />
			)}
		</>
	);
};

export default ItemDetailPage;
