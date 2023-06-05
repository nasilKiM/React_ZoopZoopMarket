import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import ProductApi from 'Apis/productApi';

import BuyerDetailPage from './BuyerDetail/BuyerDetail';
import SellerDetailPage from './SellerDetail/SellerDetail';
import ItemDetailPageSkeleton from './Components/itemDetailSkeleton';

const ItemDetailPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [status, setStatus] = useState(false);

	const { idx } = useParams();
	const client = useQueryClient();
	const { data, refetch } = useQuery(
		['product', idx, status],
		() => ProductApi.detail(idx),
		{
			onError: err => {
				console.log(err);
			},
		},
	);

	const { mutate } = useMutation(() => ProductApi.addRecent(idx), {
		onSuccess: () => {
			client.invalidateQueries(['recent']);
		},
	});

	useEffect(() => {
		mutate(data?.data.searchProduct.idx);
		refetch();
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	const isSeller = data && data.data.isSeller;

	return (
		<>
			{isLoading ? (
				<ItemDetailPageSkeleton />
			) : (
				<>
					{!isSeller ? (
						<BuyerDetailPage state={isSeller} product={data} />
					) : (
						<SellerDetailPage
							state={isSeller}
							product={data}
							idx={idx}
							setStatus={setStatus}
						/>
					)}
				</>
			)}
		</>
	);
};

export default ItemDetailPage;
