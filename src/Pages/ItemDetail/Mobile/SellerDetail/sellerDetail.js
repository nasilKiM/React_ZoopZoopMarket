import styled from 'styled-components';
import MobileDetailTop from '../Components/MobileDetailTop/mobileDetailTop';
import DetailHead from 'Pages/ItemDetail/Components/DetailHead/detailHead';
import DetailContent from 'Pages/ItemDetail/Components/DetailContent/detailContent';
import AnotherProduct from 'Pages/ItemDetail/Components/AnotherProduct/anotherProduct';
import { useState } from 'react';
import ChattingPage from 'Pages/Chat';
import { flexAllCenter } from 'Styles/common';

const MobileSellerDetail = ({ state }) => {
	const [detailState, setDetailState] = useState(true);
	return (
		<S.Wrapper>
			<MobileDetailTop state={state} />
			<DetailHead />
			<S.DetailAndChatBar>
				<div onClick={() => setDetailState(true)}>상세정보</div>
				<div onClick={() => setDetailState(false)}>채팅 내역</div>
			</S.DetailAndChatBar>
			{detailState ? <DetailContent state={state} /> : <ChattingPage />}
			<AnotherProduct />
		</S.Wrapper>
	);
};

export default MobileSellerDetail;

const Wrapper = styled.div`
	border: 1px solid;
	width: 414px;
	/* height: 736px; */
`;

const DetailAndChatBar = styled.div`
	${flexAllCenter}
	&>div {
		${flexAllCenter}
		border-top: 1px solid;
		border-bottom: 1px solid;
		padding: 20px;
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		letter-spacing: 5px;
		width: 100%;
	}
	& > div:first-child {
		border-right: 1px solid;
	}
`;

const S = {
	Wrapper,
	DetailAndChatBar,
};
