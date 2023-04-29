import React from 'react';
import styled from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileHeader from 'Components/Layout/Header/Mobile';
import { flexAllCenter } from 'Styles/common';
import CompletedBtn from 'Components/Buttons/CompletedBtn/completedBtn';
import EditBtns from 'Components/Buttons/EditBtns/editBtns';

const MobileMyItemPage = () => {
	// const navigate = useNavigate();
	const item = new Array(4).fill(0);
	return (
		<S.Wrapper>
			<MobileHeader />
			<S.Wrap>
				<S.Head>
					<span>
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					<span>판매 아이템 리스트</span>
				</S.Head>
				{/*onClick={() => navigate(`/detail/${item.id}`)} */}
				<MainWrap>
					{item.map(() => (
						<S.Container>
							<S.ItemImg src="Assets/Images/bicycle.jpg" />
							<S.ItemInfo>
								<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
								<S.ItemPrice>130,000 원</S.ItemPrice>
								<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
								<S.WrapEditBtns>
									<CompletedBtn />
									<EditBtns />
								</S.WrapEditBtns>
							</S.ItemInfo>
						</S.Container>
					))}
				</MainWrap>
			</S.Wrap>
		</S.Wrapper>
	);
};

export default MobileMyItemPage;

const Wrapper = styled.div`
	display: flex;
	border: 1px solid black;
	width: 414px;
	height: 736px;
	flex-direction: column;
`;

const Head = styled.div`
	height: 60px;
	width: 100%;
	${flexAllCenter}
	& > span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	& > span:first-child {
		padding: 30px;
		position: absolute;
		left: 0;
		cursor: pointer;
	}
`;

const Wrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const MainWrap = styled.div`
	margin: 0 auto;
	width: 90%;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-height: 120px;
	border-radius: 5px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	margin-bottom: 10px;
`;

const ItemImg = styled.img`
	min-width: 120px;
	max-height: 120px;
	padding: 10px;
	object-fit: cover;
`;

const ItemInfo = styled.div`
	padding-top: 10px;
	padding-left: 10px;
	max-height: 100px;
	display: flex;
	flex-direction: column;
`;

const ItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const ItemTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xs};
	overflow: hidden;
	padding-bottom: 20px;
`;

const WrapEditBtns = styled.div`
	display: flex;
	width: 130%;
	justify-content: space-between;
`;

const S = {
	Wrapper,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
	Head,
	Wrap,
	WrapEditBtns,
};
