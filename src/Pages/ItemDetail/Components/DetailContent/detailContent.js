import { useNavigate } from 'react-router-dom';

import ChatApis from 'Apis/chatApis';

import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import { useSocket } from 'Context/socket';

import dayjs from 'dayjs';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';

import {
	flexAlignCenter,
	flexAllCenter,
	flexSpaceBetween,
} from 'Styles/common';

const DetailContent = ({ state, item, itemAllInfo }) => {
	const today = dayjs();
	const created = item && dayjs(item.createdAt);
	const cleanDate = item && dayjs(item.createdAt).format('YYYY년 MM월 DD일');
	const diff = today.diff(created, 'day', true);

	const date =
		diff.toFixed() == 0
			? '오늘'
			: diff < 4
			? `${diff.toFixed()}일전`
			: cleanDate;

	const navigate = useNavigate();
	const so = useSocket();

	const onClickChatStartBtn = async () => {
		try {
			const setChatRoomRes = await ChatApis.setChatRoom(item.idx);

			const message = '채팅방을 시작합니다';

			const data = {
				title: item?.title,
				createdAt: item?.createdAt,
				prod_idx: item?.idx,
				room_idx: setChatRoomRes.data.idx,
				nickName: item?.User.nick_name,
				message,
				isSeller: itemAllInfo?.isSeller,
			};

			so?.emit('sendMessage', data);
			ChatApis.saveMsg({
				room_idx: setChatRoomRes.data.idx,
				message,
			});

			navigate('/chat');
		} catch (error) {
			navigate('/chat');
		}
	};

	return (
		<>
			{!state
				? item && (
						<S.BuyerWrapper isDesktop={isDesktop}>
							<div>{item.title}</div>
							<div>
								{item.ProductsTags.map(item => (
									<S.Tag
										key={Math.random()}
										onClick={() => {
											navigate(`/search_list/${item.Tag.tag}`);
										}}
									>
										#{item.Tag.tag}
									</S.Tag>
								))}
								<div>|</div> {date}
							</div>
							<div>
								{item.price == 0
									? '무료나눔'
									: item.price.toLocaleString('ko-KR') + '원'}
							</div>
							<div style={{ whiteSpace: 'pre-wrap' }}>
								{item.description.replaceAll('\r,\n', '<br />')}
							</div>
							<div>
								{item.status == '판매중' && (
									<div onClick={onClickChatStartBtn}>채팅하기</div>
								)}
								{item.status == '판매중' && (
									<div>
										<HeartBtn like={item.liked} idx={item.idx} />
									</div>
								)}
							</div>
							{item.status == '판매완료' && (
								<S.solidOut>판매가 완료된 아이템입니다.</S.solidOut>
							)}
						</S.BuyerWrapper>
				  )
				: item && (
						<S.SellerWrapper isDesktop={isDesktop}>
							<div>
								<div>{item.title}</div>
							</div>
							<div>
								{item.ProductsTags.map(item => (
									<S.Tag
										key={Math.random()}
										onClick={() => {
											navigate(`/search_list/${item.Tag.tag}`);
										}}
									>
										#{item.Tag.tag}
									</S.Tag>
								))}
								<div>|</div> {date}
							</div>
							<div>
								{item.price == 0
									? '무료나눔'
									: item.price.toLocaleString('ko-KR') + '원'}
							</div>
							<div style={{ whiteSpace: 'pre-wrap' }}>
								{item.description.replaceAll('\r,\n', '<br />')}
							</div>
						</S.SellerWrapper>
				  )}
		</>
	);
};

export default DetailContent;

const BuyerWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
	margin: 25px 10px;

	> div {
		margin: 20px 0;
	}

	> div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		@media (max-width: 700px) {
			font-size: ${({ theme }) => theme.fontSize.md};
		}
	}

	> div:nth-of-type(2) {
		${flexAlignCenter}
		gap: 5px;

		:hover {
			cursor: pointer;
		}

		span {
			padding: 5px;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.color.gray[100]};
			@media (max-width: 700px) {
				font-size: ${({ theme }) => theme.fontSize.sm};
			}
		}
		div:nth-of-type(1) {
			padding: 0px 5px;
		}
	}

	> div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
		@media (max-width: 700px) {
			font-size: ${({ theme }) => theme.fontSize.base};
		}
	}

	> div:nth-of-type(4) {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		padding-top: 20px;
		min-height: 180px;
		line-height: 30px;
		border-top: 2px dashed ${({ theme }) => theme.color.gray[100]};
	}

	> div:nth-of-type(5) {
		${flexSpaceBetween}
		margin: 40px 0;

		> div:first-child {
			background-color: ${({ theme }) => theme.color.gray[200]};
			font-weight: ${({ theme }) => theme.fontWeight.bold};
			color: ${({ theme }) => theme.color.black};
			cursor: pointer;
			padding: 15px 35px;
			border-radius: 10px;
			:hover {
				background-color: ${({ theme }) => theme.color.primary[400]};
				color: ${({ theme }) => theme.color.white};
			}
		}

		> div:last-child {
			width: 40px;
			height: 40px;
		}
	}
`;

const solidOut = styled.div`
	width: 100%;
	padding: 15px;
	${flexAllCenter}
	background-color: ${({ theme }) => theme.color.gray[200]};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.black};
`;

const SellerWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
	margin: 25px 10px;

	> div {
		margin: 20px 0;
	}

	> div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		${flexAllCenter}
		justify-content: space-between;
	}

	> div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}

	> div:nth-of-type(4) {
		padding-top: 20px;
		min-height: 180px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		line-height: 30px;
		border-top: 2px dashed ${({ theme }) => theme.color.gray[100]};
	}

	> div:nth-of-type(2) {
		display: flex;
		align-items: center;
		gap: 5px;
		span {
			padding: 5px;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.color.gray[100]};
		}
		div:nth-of-type(1) {
			padding: 0px 5px;
		}
	}
`;
const Tag = styled.span`
	:hover {
		background-color: ${({ theme }) => theme.color.primary[400]};
		color: ${({ theme }) => theme.color.hover};
		border: 1px solid black;
	}
`;
const S = {
	BuyerWrapper,
	solidOut,
	SellerWrapper,
	Tag,
};
