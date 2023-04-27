import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const DetailContent = ({ state }) => {
	return (
		<>
			{state ? (
				<S.BuyerWrapper>
					<div>#제목 : 브라운 그레이 자켓 팝니다.</div>
					<div># 카테고리(여성의류) | 2일전</div>
					<div>120,000 원</div>
					<div>
						본문내용 : 택도 제거 안한 새 제품입니다! 직거래와 택배 모두
						가능합니다.
					</div>
					<div>
						<div>채팅하기</div>
						<div>
							<HeartBtn />
						</div>
					</div>
				</S.BuyerWrapper>
			) : (
				<S.SellerWrapper>
					<div>
						<div>#제목 : 브라운 그레이 자켓 팝니다.</div>
						<div>
							<HeartBtn />
						</div>
					</div>
					<div># 카테고리(여성의류) | 2일전</div>
					<div>120,000 원</div>
					<div>
						본문내용 : 택도 제거 안한 새 제품입니다! 직거래와 택배 모두
						가능합니다.
					</div>
				</S.SellerWrapper>
			)}
		</>
	);
};

export default DetailContent;
const BuyerWrapper = styled.div`
	& > div {
		margin: 20px 0;
	}
	& > div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	& > div:nth-of-type(4) {
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}
	& > div:nth-of-type(5) {
		${flexAllCenter}
		justify-content: space-between;
		margin: 40px 0;
		& > div:first-child {
			background-color: #b9b9b9;
			padding: 15px 30px;
			border-radius: 10px;
		}
		& > div:last-child {
			width: 40px;
			height: 40px;
		}
	}
`;

const SellerWrapper = styled.div`
	& > div {
		margin: 20px 0;
	}
	& > div:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		${flexAllCenter}
		justify-content: space-between;
		& > div:last-child {
			width: 40px;
			height: 40px;
		}
	}
	& > div:nth-of-type(3) {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	& > div:nth-of-type(4) {
		font-size: ${({ theme }) => theme.fontSize.md};
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
