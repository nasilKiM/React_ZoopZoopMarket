import CompletedBtn from 'Components/Buttons/CompletedBtn/completedBtn';
import EditBtns from 'Components/Buttons/EditBtns/editBtns';
import styled from 'styled-components';

const MyItemPage = () => {
	const item = new Array(8).fill(0);
	return (
		<S.Div>
			<S.Wrapper>
				{/*onClick={() => navigate(`/detail/${item.id}`)} */}
				{item.map(() => (
					<S.Container>
						<S.ItemImg src="Assets/Images/bicycle.jpg" />
						<S.ItemInfo>
							<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
							<S.ItemPrice>130,000 원</S.ItemPrice>
							<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
							<S.WrapEditBtns>
								<EditBtns />
								<CompletedBtn />
							</S.WrapEditBtns>
						</S.ItemInfo>
					</S.Container>
				))}
			</S.Wrapper>
		</S.Div>
	);
};

export default MyItemPage;
const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	height: 800px;
	width: 60%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
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
