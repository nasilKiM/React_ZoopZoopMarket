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
							.slice(0, 4)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(4, 8)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</Desktop>
			<NoteBook16>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 3)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(3, 6)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</NoteBook16>
			<NoteBook14>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 2)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(2, 4)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
			</NoteBook14>
			<Tablet>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(0, 1)
							.map(pageItems => <SearchList products={pageItems} />)}
				</S.CardContainer>
				<S.CardContainer>
					{data &&
						data.data.product
							.slice(1, 2)
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
`;
const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 30px;
`;
const CardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;
const S = {
	Wrapper,
	Container,
	CardContainer,
};

const Desktop = styled.div`
	@media screen and (max-width: 1330px) {
		//1330이하일때만 적용
		display: none;
	}
`;
const NoteBook16 = styled.div`
	@media screen and (max-width: 1069px), (min-width: 1330px) {
		//1069이하일때만 적용
		//1330이상일때만 적용
		display: none;
	}
`;

const NoteBook14 = styled.div`
	@media screen and (max-width: 798px), (min-width: 1069px) {
		display: none;
	}
`;

const Tablet = styled.div`
	@media screen and (min-width: 797px) {
		display: none;
	}
`;
