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
								| {date}
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
								| {date}
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
	margin: 20px 20px;
	& > div {
		margin: 20px 0;
	}
	//제목
	& > div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}
	//태그, 날짜
	& > div:nth-of-type(2) {
		display: flex;
		gap: 5px;
	}
	//가격
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	//본문내용
	& > div:nth-of-type(4) {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}
	// 카테고리
	& > div:nth-of-type(5) {
		${flexAllCenter}
		justify-content: space-between;
		margin: 40px 0;
		& > div:first-child {
			background-color: #b9b9b9;
			padding: 15px 30px;
			border-radius: 10px;
		}
		//heart
		& > div:last-child {
			width: 40px;
			height: 40px;
		}
	}
`;

const SellerWrapper = styled.div`
	margin: 20px 20px;
	& > div {
		margin: 20px 0;
	}
	& > div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		${flexAllCenter}
		justify-content: space-between;
		& > div:last-child {
			width: 40px;
			height: 40px;
		}
	}
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	& > div:nth-of-type(4) {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}
	& > div:nth-of-type(5) {
		${flexAllCenter}
		justify-content: space-between;
		& > div {
			background-color: #b9b9b9;
			padding: 20px;
			border-radius: 20px;
		}
	}
`;

const S = {
	BuyerWrapper,
	SellerWrapper,
};
