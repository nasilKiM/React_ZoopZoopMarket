import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PropsBtn } from 'Components/Buttons/style';

import { useMediaQuery } from 'react-responsive';
import SearchList from './searchList';

const UsedProduct = ({ word, data }) => {
	const navigate = useNavigate();

	const goWholeItem = () => {
		navigate(`${0}`, { state: data });
	};
	const isBigScreen = useMediaQuery({ query: '(min-width: 1590px)' });
	const isSecondBigScreen = useMediaQuery({ query: '(min-width: 1325px)' });
	const isThirdBigScreen = useMediaQuery({ query: '(min-width: 1070px)' });
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 1330 });
		return isDesktop ? children : null;
	};

	const NoteBook16 = ({ children }) => {
		const isNoteBook16 = useMediaQuery({ minWidth: 1070, maxWidth: 1329 });
		return isNoteBook16 ? children : null;
	};

	const NoteBook14 = ({ children }) => {
		const isNoteBook14 = useMediaQuery({ minWidth: 798, maxWidth: 1069 });
		return isNoteBook14 ? children : null;
	};
	const Tablet = ({ children }) => {
		const isTablet = useMediaQuery({ maxWidth: 797 });
		return isTablet ? children : null;
	};

	return (
		<S.Wrapper>
			<Desktop>
				<S.CardContainer>
					{data && data.slice(0, 4).map(data => <SearchList products={data} />)}
				</S.CardContainer>

				<S.CardContainer>
					{data && data.slice(4, 8).map(data => <SearchList products={data} />)}
				</S.CardContainer>
			</Desktop>
			<NoteBook16>
				<S.CardContainer>
					{data && data.slice(0, 3).map(data => <SearchList products={data} />)}
				</S.CardContainer>

				<S.CardContainer>
					{data && data.slice(3, 6).map(data => <SearchList products={data} />)}
				</S.CardContainer>
			</NoteBook16>
			<NoteBook14>
				<S.CardContainer>
					{data && data.slice(0, 2).map(data => <SearchList products={data} />)}
				</S.CardContainer>

				<S.CardContainer>
					{data && data.slice(2, 4).map(data => <SearchList products={data} />)}
				</S.CardContainer>
			</NoteBook14>
			<Tablet>
				{data && data.slice(0, 2).map(data => <SearchList products={data} />)}
			</Tablet>

			<S.Container>
				<PropsBtn
					onClick={goWholeItem}
					variant="primary"
					shape="moreBtn"
					size="moreBtn"
				>
					중고 아이템 <br />
					전체보기&gt;
				</PropsBtn>
			</S.Container>
		</S.Wrapper>
	);
};
export default UsedProduct;
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
