import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';
import { useEffect, useState } from 'react';
import ChattingPage from 'Pages/Chat';
import AnotherProduct from '../Components/AnotherProduct/anotherProduct';
import { useNavigate } from 'react-router';
import ProductApi from 'Apis/productApi';

const SellerDetailPage = ({ state, product, idx }) => {
	// const item = product && product.data.searchProduct;
	const [item, setItem] = useState();
	const isSeller = product.data.isSeller;
	const [detailState, setDetailState] = useState('상세정보');
	const navigate = useNavigate();

	useEffect(() => {
		if (product) setItem(product.data.searchProduct);
		return () => {
			setItem();
		};
	}, []);

	const onClickDetailAndChatBar = e => {
		const { innerText } = e.target;
		setDetailState(innerText);
	};

	// const socket = 'sample용소켓입니다.';
	const soldOut = async (index, socket) => {
		try {
			const response = await ProductApi.soldOut(index, socket);
			if (response.status === 200) {
				console.log('물품판매됨', response);
			}
		} catch (error) {
			console.log('에러', error);
		}
	};

	return (
		<S.Wrapper>
			<S.EditBar>
				<div onClick={() => soldOut(item.idx, socket)}>판매완료 변경</div>
				<ul>
					<div onClick={() => navigate(`/register/${item.idx}`)}>Edit</div>
					{/* <span>|</span> */}
					<div>Delete</div>
				</ul>
			</S.EditBar>
			<DetailHead item={item} />
			<S.DetailAndChatBar>
				<S.Detail active={detailState} onClick={onClickDetailAndChatBar}>
					상세정보
				</S.Detail>
				<S.Chat active={detailState} onClick={onClickDetailAndChatBar}>
					채팅내역
				</S.Chat>
			</S.DetailAndChatBar>
			{detailState === '상세정보' ? (
				<DetailContent state={state} item={item} />
			) : (
				<ChattingPage
					idx={idx}
					item={item}
					isSeller={isSeller}
					setItem={setItem}
				/>
			)}
			<AnotherProduct />
		</S.Wrapper>
	);
};

export default SellerDetailPage;

const Wrapper = styled.div`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	/* border: 1px solid; */
	margin: 0 auto;
`;

const EditBar = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	${flexAllCenter}
	justify-content: space-between;
	padding-top: 20px;
	//판매완료변경
	& > div {
		padding: 15px 20px;
		background-color: #d9d9d9;
		border-radius: 10px;
		cursor: pointer;
		:hover {
			background-color: ${({ theme }) => theme.color.primary[400]};
			color: ${({ theme }) => theme.color.white};
		}
	}
	& > ul {
		${flexAllCenter}
		cursor: pointer;
		gap: 10px;
		& > div {
			padding: 15px 20px;
			background-color: #d9d9d9;
			border-radius: 10px;
			:hover {
				background-color: ${({ theme }) => theme.color.primary[400]};
				color: ${({ theme }) => theme.color.white};
			}
		}
	}
`;

const DetailAndChatBar = styled.div`
	${flexAllCenter}
	&>div {
		${flexAllCenter}
		border-top: 2px solid ${({ theme }) => theme.color.gray[200]};
		border-bottom: 2px solid ${({ theme }) => theme.color.gray[200]};
		padding: 20px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
		letter-spacing: 5px;
		width: 100%;
		cursor: pointer;
	}
	& > div:first-child {
		border-right: 2px solid ${({ theme }) => theme.color.gray[200]};
	}
`;

const Detail = styled.div`
	color: ${({ active }) => (active === '상세정보' ? '#FF3647' : 'black')};
	background-color: ${({ active }) =>
		active === '상세정보' ? '#E9E9E9' : 'none'};
`;

const Chat = styled.div`
	color: ${({ active }) => (active === '채팅내역' ? '#FF3647' : 'black')};
	background-color: ${({ active }) =>
		active === '채팅내역' ? '#E9E9E9' : 'none'};
	border-bottom: ${({ active, theme }) =>
		active === '채팅내역' ? `10px solid ${theme.color.gray[400]}` : 'none'};
`;

const S = {
	Wrapper,
	EditBar,
	DetailAndChatBar,
	Detail,
	Chat,
};
