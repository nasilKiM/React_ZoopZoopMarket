import MannerMeter from 'Components/Icon/Icon';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';
import ProductImg from './ProductImg/productImg';

const DetailHead = () => {
	return (
		<S.Wrapper>
			<ProductImg />
			<S.ProductWrapper>
				<S.Profile>
					<div>이미지</div>
					<ul>
						<li>판매자 닉네임</li>
						<li>위치 (동까지)</li>
						<li>위도 경도</li>
					</ul>
				</S.Profile>
				<S.ProfileDetail>
					<ul>
						<MannerMeter />
						<li>매너점수</li>
						<li>총 거래건수 : OO건</li>
					</ul>
				</S.ProfileDetail>
			</S.ProductWrapper>
		</S.Wrapper>
	);
};

export default DetailHead;

const Wrapper = styled.div`
	& > * {
		margin: 20px 0;
	}
	& > div:first-child {
		border: 1px solid;
		height: 400px;
		${flexAllCenter}
		background-color: #d9d9d9;
	}
`;

const ProductWrapper = styled.div`
	border: 1px solid;
	${flexAllCenter}
	justify-content: space-between;
`;

const Profile = styled.div`
	${flexAllCenter}
	& > div {
		width: 100px;
		height: 100px;
		${flexAllCenter}
		background-color: #b9b9b9;
		border-radius: 50%;
	}
	& > ul {
		margin-left: 20px;
		& > li:first-child {
			font-size: ${({ theme }) => theme.fontSize.md};
			font-weight: ${({ theme }) => theme.fontWeight.bold};
			margin-bottom: 5px;
		}
		& > li {
			margin: 5px 0;
		}
	}
`;

const ProfileDetail = styled.div`
	text-align: right;
	& > ul > * {
		margin: 10px 0;
	}
`;

const S = {
	Wrapper,
	ProductWrapper,
	Profile,
	ProfileDetail,
};
