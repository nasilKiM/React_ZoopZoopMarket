import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import SellerDetailPage from './SellerDetail/SellerDetail';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const ItemDetailPage = () => {
	const { idx } = useParams();
	const { data } = useQuery(['product', idx], () => ProductApi.detail(idx), {
		onError: err => {
			console.log(err);
		},
	});
  
  const client = useQueryClient();
	
	const { mutate } = useMutation(() => ProductApi.addRecent(idx), {
		onSuccess: () => {
			client.invalidateQueries(['recent']);
		},
	});

	useEffect(() => {
		mutate(data?.data.searchProduct.idx);
	}, []);


	console.log(data);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const isSeller = data && data.data.isSeller;

	return (
		<>
			{!isSeller ? (
				<BuyerDetailPage state={isSeller} product={data} />
			) : (
				<SellerDetailPage state={isSeller} product={data} idx={idx} />
			)}
		</>
	);
};

export default ItemDetailPage;
