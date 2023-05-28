import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import SellerDetailPage from './SellerDetail/SellerDetail';
import { useQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

const ItemDetailPage = () => {
	const { idx } = useParams();
	let state = '';
	// const [product, setProduct] = useState('');

	// const temp = async () => {
	// 	try {
	// 		const res = await ProductApi.detail(idx);
	// 		setProduct(res);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };
	console.log(idx);
	const { data } = useQuery(['product'], () => ProductApi.detail(idx));

	console.log(data);
	useEffect(() => {
		window.scrollTo(0, 0);
		// temp();
	}, []);

	const isSeller = data && data.data ? data.data.isSeller : null;

	state = data ? data.isSeller : null;

	return (
		<>
			{!isSeller ? (
				<BuyerDetailPage state={state} product={data} />
			) : (
				<SellerDetailPage state={state} product={data} idx={idx} />
			)}
		</>
	);
};

export default ItemDetailPage;
