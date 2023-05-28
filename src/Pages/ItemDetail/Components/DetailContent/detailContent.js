import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import { flexAllCenter } from 'Styles/common';
import dayjs from 'dayjs';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';

const DetailContent = ({ state, item }) => {
	const today = dayjs();
	const created = item && dayjs(item.createdAt);
	const cleanDate = item && dayjs(item.createdAt).format('YYYY년 MM월 DD일');
	const diff = today.diff(created, 'day', true);
	console.log(today, created, diff, diff.toFixed());

	const date =
		diff.toFixed() == 0
			? '오늘'
			: diff < 4
			? `${diff.toFixed()}일전`
			: cleanDate;

	return (
		<>
			{!state
				? item && (
						<S.BuyerWrapper isDesktop={isDesktop}>
							<div>{item.title}</div>
							<div>
								{item.ProductsTags.map(item => (
									<span>#{item.Tag.tag}</span>
								))}
								<div>|</div> {date}
							</div>
							<div>{item.price.toLocaleString('ko-KR')}원</div>
							<div style={{ whiteSpace: 'pre-wrap' }}>
								{item.description.replaceAll('\r,\n', '<br />')}
							</div>
							<div>
								<div>채팅하기</div>
								<div>
									<HeartBtn like={item.liked} idx={item.idx} />
								</div>
							</div>
						</S.BuyerWrapper>
				  )
				: item && (
						<S.SellerWrapper isDesktop={isDesktop}>
							<div>
								<div>{item.title}</div>
							</div>
							<div>
								{item.ProductsTags.map(item => (
									<span>#{item.Tag.tag}</span>
								))}
								<div>|</div> {date}
							</div>
							<div>{item.price.toLocaleString('ko-KR')}원</div>
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
	& > div {
		margin: 20px 0;
	}
	//제목
	& > div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	//태그, 날짜
	& > div:nth-of-type(2) {
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
	//가격
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	//본문내용
	& > div:nth-of-type(4) {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		padding-top: 20px;
		min-height: 180px;
		line-height: 30px;
		border-top: 2px dashed ${({ theme }) => theme.color.gray[100]};
	}
	// 카테고리
	& > div:nth-of-type(5) {
		${flexAllCenter}
		justify-content: space-between;
		margin: 40px 0;
		& > div:first-child {
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
		//heart
		& > div:last-child {
			width: 40px;
			height: 40px;
		}
	}
`;

const SellerWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
	margin: 25px 10px;
	& > div {
		margin: 20px 0;
	}
	//제목
	& > div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		${flexAllCenter}
		justify-content: space-between;
	}
	//가격
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	//본문
	& > div:nth-of-type(4) {
		padding-top: 20px;
		min-height: 180px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		line-height: 30px;
		border-top: 2px dashed ${({ theme }) => theme.color.gray[100]};
	}
	//태그
	& > div:nth-of-type(2) {
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

const S = {
	BuyerWrapper,
	SellerWrapper,
};
