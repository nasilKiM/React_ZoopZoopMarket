import { useMutation } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

export const useLikedBtn = () => {
	return useMutation(ProductApi.likedBtn);
};

export const useSoldOutMutation = () => {
	return useMutation(data => ProductApi.soldOut(data.prod_idx, data.token));
};

const client = useQueryClient();

const { mutate } = useMutation(
    () => ProductApi.deleteRecentList(item.item.Product.idx),
    {
        onSuccess: () => {
            client.invalidateQueries(['recent']);
        },
    },
);