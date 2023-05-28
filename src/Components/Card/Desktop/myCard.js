import EditBtns from 'Components/Buttons/EditBtns/editBtns';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MyItemCard = ({ index, products }) => {
	const navigate = useNavigate();

	const onClickCard = () => {
		navigate(`/item_detail/${index}`);
	};

	return (
		// products && (
		<S.Wrapper>
			<S.Container>
				<div onClick={onClickCard}>
					<S.ItemImg src={'/Assets/Images/bicycle.jpg'} />
					<S.ItemInfo>
						<S.ItemTitle>제목이 들어갑니다.</S.ItemTitle>
						<S.ItemPrice>
							100,000 원{/* {products.price.toLocaleString('ko-KR')}원 */}
						</S.ItemPrice>
						<S.Button>
							<EditBtns />
						</S.Button>
					</S.ItemInfo>
				</div>
			</S.Container>
		</S.Wrapper>
	);
	//);
};

export default MyItemCard;

const Wrapper = styled.div`
	padding: 15px 0;
	display: flex;
`;

const Container = styled.div`
	width: 100%;
	max-width: 280px;
	overflow: hidden;
	cursor: pointer;
	margin-right: 10px;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
	@media (min-width: 414px) {
		width: 200px;
	}
	@media (min-width: 600px) {
		width: 220px;
	}
	@media (min-width: 900px) {
		width: 240px;
	}
	@media (min-width: 1100px) {
		width: 280px;
	}
`;

const ItemImg = styled.img`
	width: 100%;
	height: 250px;
	max-height: 250px;
	object-fit: cover;
	padding-bottom: 15px;
	margin: auto;
`;

const ItemInfo = styled.div`
	width: 100%;
	padding-top: 15px;
	display: flex;
	flex-wrap: wrap;
	padding: 0 15px;
`;

const ItemTitle = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 10px;
`;

const Button = styled.div`
	width: 100%;
	padding-bottom: 10px;
`;

const S = {
	Wrapper,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	Button,
};
