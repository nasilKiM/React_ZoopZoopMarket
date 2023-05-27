import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import SellerDetailPage from './SellerDetail/SellerDetail';
import { useQuery } from '@tanstack/react-query';

const ItemDetailPage = () => {
	const { idx } = useParams();
	const { data } = useQuery(['product', idx], () => ProductApi.detail(idx));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const isSeller = data && data.data.isSeller;

	return (
		<>
			{!isSeller ? (
				<BuyerDetailPage state={isSeller} product={data} />
			) : (
				<SellerDetailPage state={isSeller} product={data} />
			)}
		</>
	);
};

export default ItemDetailPage;
