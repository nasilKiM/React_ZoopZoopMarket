import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';
import { useState } from 'react';

const SellerDetailPage = ({ state }) => {
	const [detailState, setDetailState] = useState(true);
	return (
		<S.Wrapper>
			<div>판매자페이지</div>
			<S.EditBar>
				<select>
					<option>판매중</option>
					<option>판매완료</option>
				</select>
				<ul>
					<li>Edit</li>
					<li>Hide</li>
					<li>Delete</li>
				</ul>
			</S.EditBar>
			<DetailHead />
			<S.DetailAndChatBar>
				<div onClick={() => setDetailState(true)}>상세정보</div>
				<div onClick={() => setDetailState(false)}>채팅 내역</div>
			</S.DetailAndChatBar>
			{detailState ? <DetailContent state={state} /> : <div>채팅</div>}
		</S.Wrapper>
	);
};

export default SellerDetailPage;

const Wrapper = styled.div`
	width: 80%;
	border: 1px solid;
	margin: 0 auto;
`;

const EditBar = styled.div`
	font-size: ${({ theme }) => theme.fontSize.lg};
	${flexAllCenter}
	justify-content: space-between;
	& > select {
		font-size: ${({ theme }) => theme.fontSize.lg};
		padding: 10px;
	}
	& > ul {
		${flexAllCenter}
		&>li {
			margin: 0 10px;
		}
		& > li::after {
			content: '|';
			margin-left: 10px;
		}
		& > li:last-child::after {
			content: '';
		}
	}
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
	EditBar,
	DetailAndChatBar,
};
