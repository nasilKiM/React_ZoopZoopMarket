import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import { flexAllCenter } from 'Styles/common';
import dayjs from 'dayjs';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';

const DetailContent = ({ state, item }) => {
	const created = item && dayjs(item.createdAt).format('YYYY년 MM월 DD일');
	const diff = dayjs().diff(item && dayjs(item.createdAt), 'day');

	const date = diff === 0 ? '오늘' : diff < 4 ? `${diff}일전` : created;

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
							<div>{item.description}</div>
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
								<div>
									<HeartBtn like={item.liked} idx={item.idx} />
								</div>
							</div>
							<div>
								{item.ProductsTags.map(item => (
									<span>#{item.Tag.tag}</span>
								))}
								<div>|</div> {date}
							</div>
							<div>{item.price.toLocaleString('ko-KR')}원</div>
							<div>{item.description}</div>
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
		min-height: 150px;
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
		//하트
		& > div:last-child {
			width: 40px;
			height: 40px;
		}
	}
	//가격
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	//본문
	& > div:nth-of-type(4) {
		padding-top: 20px;
		min-height: 150px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
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
