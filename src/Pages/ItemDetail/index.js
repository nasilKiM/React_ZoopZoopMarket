import { useState } from 'react';

import SellerDetailPage from './SellerDetail/SellerDetail';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import { useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';

const ItemDetailPage = () => {
	const { idx } = useParams();
	console.log('////////////////////', idx);

	const temp = async () => {
		try {
			const res = await ProductApi.detail(idx);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	temp();

	const [state, setState] = useState(true);

	const onChangeState = () => {
		setState(prev => !prev);
	};
	return (
		<>
			<button onClick={onChangeState}>버튼</button>
			{state ? (
				<BuyerDetailPage state={state} />
			) : (
				<SellerDetailPage state={state} />
			)}
		</>
	);
};

export default ItemDetailPage;
