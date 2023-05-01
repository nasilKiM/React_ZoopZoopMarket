import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';
import { useState } from 'react';
import ChattingPage from 'Pages/Chat';
import AnotherProduct from '../Components/AnotherProduct/anotherProduct';
import { useNavigate } from 'react-router';

const SellerDetailPage = ({ state }) => {
	const [detailState, setDetailState] = useState('상세정보');
	const navigate = useNavigate();

	const onClickDetailAndChatBar = e => {
		const { innerText } = e.target;
		setDetailState(innerText);
		console.log(detailState);
	};
	return (
		<S.Wrapper>
			<S.EditBar>
				<div>판매완료 변경</div>
				<ul>
					<li onClick={() => navigate('/register')}>Edit</li>
					<li>Delete</li>
				</ul>
			</S.EditBar>
			<DetailHead />
			<S.DetailAndChatBar>
				<S.Detail active={detailState} onClick={onClickDetailAndChatBar}>
					상세정보
				</S.Detail>
				<S.Chat active={detailState} onClick={onClickDetailAndChatBar}>
					채팅내역
				</S.Chat>
			</S.DetailAndChatBar>
			{detailState === '상세정보' ? (
				<DetailContent state={state} />
			) : (
				<ChattingPage />
			)}
			<AnotherProduct />
		</S.Wrapper>
	);
};

export default SellerDetailPage;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	border: 1px solid;
	margin: 0 auto;
`;

const EditBar = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	${flexAllCenter}
	justify-content: space-between;
	& > div {
		padding: 10px;
		margin: 20px;
		background-color: #d9d9d9;
		border-radius: 10px;
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
		font-size: ${({ theme }) => theme.fontSize.lg};
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
