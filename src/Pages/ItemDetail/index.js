import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import SellerDetailPage from './SellerDetail/SellerDetail';
import { useMutation, useQuery } from '@tanstack/react-query';

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

	const { data } = useQuery(['product', idx], () => ProductApi.detail(idx));
	const { mutate } = useMutation(prod_idx => ProductApi.addRecent(prod_idx));

	useEffect(() => {
		mutate(data?.data.searchProduct.idx);
	}, []);

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
				<SellerDetailPage state={state} product={data} />
			)}
		</>
	);
};

export default ItemDetailPage;
