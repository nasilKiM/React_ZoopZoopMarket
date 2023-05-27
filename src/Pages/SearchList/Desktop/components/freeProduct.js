import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PropsBtn } from 'Components/Buttons/style';
import SearchList from './searchList';

const FreeProduct = ({ word, data }) => {
	const navigate = useNavigate();

	// const { data } = useQuery(['SEARCH_FREE', word], () => {
	// 	return ProductApi.searchItems(1, word, 1);
	// 	//useInfinteQuery 안에 내용사용해서 적용해보기
	// });

	//data && console.log(data);

	const goWholeList = () => {
		navigate(`${1}`, { state: data });
	};

	return (
		<S.Wrapper>
			<Desktop>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 8)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</Desktop>
			<NoteBook16>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 6)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</NoteBook16>
			<NoteBook14>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 4)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</NoteBook14>
			<Tablet>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 12)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</Tablet>
			<S.Container>
				<PropsBtn
					onClick={goWholeList}
					variant="primary"
					shape="moreBtn"
					size="moreBtn"
				>
					무료 아이템 <br />
					전체보기&gt;
				</PropsBtn>
			</S.Container>
		</S.Wrapper>
	);
};
export default FreeProduct;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-bottom: 40px;
`;
const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 30px;
`;
const CardContainer = styled.div`
	display: grid;
	width: 100%;

	justify-content: center;
	margin-top: 30px;

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(280px, 1fr));
		column-gap: 10px;
		row-gap: 10px;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(280px, 1fr));
		column-gap: 20px;
		row-gap: 20px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(280px, 1fr));
		column-gap: 30px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(280px, 1fr));
		column-gap: 40px;
		row-gap: 40px;
	}
`;
const S = {
	Wrapper,
	Container,
	CardContainer,
};

const Desktop = styled.div`
	@media screen and (max-width: 1500px) {
		//1330이하일때만 적용
		display: none;
	}
`;
const NoteBook16 = styled.div`
	@media screen and (max-width: 1001px), (min-width: 1499px) {
		//1069이하일때만 적용
		//1330이상일때만 적용
		display: none;
	}
`;

const NoteBook14 = styled.div`
	@media screen and (max-width: 768px), (min-width: 1000px) {
		display: none;
	}
`;

const Tablet = styled.div`
	@media screen and (min-width: 767px) {
		display: none;
	}
`;
