import { useQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';
import SearchList from 'Pages/SearchList/Desktop/components/searchList';
import styled from 'styled-components';

const RecentSoldOut = ({ word }) => {
	const { data } = useQuery(['SEARCH_SOLDOUT', word], () =>
		ProductApi.searchItems(1, word, 0, '판매완료'),
	);

	return (
		<S.Wrapper>
			{data &&
				data.data.product.map(product => <SearchList products={product} />)}
		</S.Wrapper>
	);
};
export default RecentSoldOut;

const Wrapper = styled.div`
	display: flex;
`;

const S = {
	Wrapper,
};
