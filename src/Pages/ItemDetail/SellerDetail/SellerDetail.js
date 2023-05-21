import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';
import { useState } from 'react';
import ChattingPage from 'Pages/Chat';
import AnotherProduct from '../Components/AnotherProduct/anotherProduct';
import { useNavigate } from 'react-router';
import ProductApi from 'Apis/productApi';

const SellerDetailPage = ({ state, product, idx }) => {
	const item = product && product.data.searchProduct;
	const isSeller = product.data.isSeller;
	const [detailState, setDetailState] = useState('상세정보');
	const navigate = useNavigate();

	const onClickDetailAndChatBar = e => {
		const { innerText } = e.target;
		setDetailState(innerText);
	};

	const socket = 'sample용소켓입니다.';
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
					<li onClick={() => navigate(`/register/${item.idx}`)}>Edit</li>
					<li>Delete</li>
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
				<ChattingPage idx={idx} item={item} isSeller={isSeller} />
			)}
			<AnotherProduct />
		</S.Wrapper>
	);
};

export default SellerDetailPage;

const Wrapper = styled.div`
	width: 70%;
	min-width: 700px;
	max-width: 1200px;
	/* border: 1px solid; */
	margin: 0 auto;
`;

const EditBar = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	${flexAllCenter}
	justify-content: space-between;
	& > div {
		padding: 15px 20px;
		margin: 20px;
		background-color: #d9d9d9;
		border-radius: 10px;
		cursor: pointer;
		:hover {
			background-color: ${({ theme }) => theme.color.primary[300]};
		}
	}
	& > ul {
		margin: 0 10px;
		${flexAllCenter}
		& > li:first-child::after {
			content: '|';
			margin: 0 10px;
		}
	}
`;

const DetailAndChatBar = styled.div`
	${flexAllCenter}
	&>div {
		${flexAllCenter}
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		padding: 20px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		letter-spacing: 5px;
		width: 100%;
	}
	& > div:first-child {
		border-right: 1px solid black;
	}
`;

const Detail = styled.div`
	color: ${({ active }) => (active === '상세정보' ? '#9EC284' : 'black')};
`;

const Chat = styled.div`
	color: ${({ active }) => (active === '채팅내역' ? '#9EC284' : 'black')};
`;

const S = {
	Wrapper,
	EditBar,
	DetailAndChatBar,
	Detail,
	Chat,
};
