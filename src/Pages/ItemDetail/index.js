import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';
import SellerDetailPage from './SellerDetail/SellerDetail';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';

const ItemDetailPage = () => {
	const { idx } = useParams();
	let state = '';
	const [product, setProduct] = useState('');

	const temp = async () => {
		try {
			const res = await ProductApi.detail(idx);
			setProduct(res);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		temp();
	}, []);

	const { isSeller } = product && product.data;
	state = isSeller;

	return (
		<>
			{!isSeller ? (
				<BuyerDetailPage state={state} product={product} />
			) : (
				<SellerDetailPage state={state} product={product} />
			)}
		</>
	);
};

export default ItemDetailPage;
