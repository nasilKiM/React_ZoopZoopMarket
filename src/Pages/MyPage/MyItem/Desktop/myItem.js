import EditBtns from 'Components/Buttons/EditBtns/editBtns';
import ItemCardMock from 'Components/Card/Desktop/Card copy';
import { flexJustifyCenter } from 'Styles/common';
import styled from 'styled-components';

const MyItemPage = () => {
	const item = new Array(8).fill(0);
	return (
		<S.Div>
			<S.Wrapper>
				{item.map(() => (
					<S.Container>
						<ItemCardMock />
						<S.WrapEditBtns>
							<EditBtns />
						</S.WrapEditBtns>
					</S.Container>
				))}
			</S.Wrapper>
		</S.Div>
	);
};

export default MyItemPage;
const Div = styled.div`
	width: 100%;
	${flexJustifyCenter}
`;

const Wrapper = styled.div`
	height: 800px;
	width: 100%;
	display: flex;
`;

const Container = styled.div`
	min-width: 200px;
	max-height: 400px;
	cursor: pointer;
	margin: 10px;
	padding-bottom: 10px;
`;

const ItemImg = styled.img`
	width: 100%;
	padding: 15px;
	max-height: 250px;
	object-fit: cover;
	margin: auto;
`;

const ItemInfo = styled.div`
	padding-top: 15px;
	max-height: 150px;
	display: flex;
	flex-direction: column;
	padding: 0 15px;
`;

const ItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const ItemTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	overflow: hidden;
	margin-bottom: 10px;
`;

const WrapEditBtns = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const S = {
	Div,
	Wrapper,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
	WrapEditBtns,
};
