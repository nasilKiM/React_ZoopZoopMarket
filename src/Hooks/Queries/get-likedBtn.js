import { useMutation } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

export const useLikedBtn = () => {
	return useMutation(ProductApi.likedBtn);
};
