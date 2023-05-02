import DetailHead from 'Pages/ItemDetail/Components/DetailHead/detailHead';
import MobileDetailTop from '../Components/MobileDetailTop/mobileDetailTop';
import styled from 'styled-components';
import DetailContent from 'Pages/ItemDetail/Components/DetailContent/detailContent';
import KaMap from 'Components/Map/Map';
import { flexAllCenter } from 'Styles/common';
import AnotherProduct from 'Pages/ItemDetail/Components/AnotherProduct/anotherProduct';

const MobileBuyerDetailPage = ({ state }) => {
	return (
		<S.Wrapper>
			<MobileDetailTop state={state} />
			<DetailHead size={'small'} />
			<DetailContent state={state} />
			<S.MapContent>
				<div>거래장소</div>
				<KaMap />
			</S.MapContent>
			<AnotherProduct />
			<S.MoreBtn>+ 더보기</S.MoreBtn>
		</S.Wrapper>
	);
};

export default MobileBuyerDetailPage;

const Wrapper = styled.div`
	border: 1px solid;
	/* width: 414px; */
	/* height: 736px; */
`;

const MapContent = styled.div`
	margin: 50px 0;
	& > div:first-child {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize.md};
		margin: 25px 0;
	}
	& > div:last-child {
		border: 1px solid;
		width: 100%;
		height: 200px;
		${flexAllCenter}
		background-color: #d9d9d9;
	}
`;

const MoreBtn = styled.div`
	text-align: center;
	margin: 40px 0;
`;

const S = {
	Wrapper,
	MapContent,
	MoreBtn,
};
