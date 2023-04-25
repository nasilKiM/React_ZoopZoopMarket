import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';

const BuyerDetailPage = ({ state }) => {
	return (
		<S.Wrapper>
			<div>구매자페이지</div>
			<DetailHead />
			<DetailContent state={state} />
			<div>
				<div>거래장소</div>
				<div>지도</div>
			</div>
			<div>
				<div>연관상품</div>
				<div></div>
			</div>
		</S.Wrapper>
	);
};

export default BuyerDetailPage;

const Wrapper = styled.div`
	width: 80%;
	border: 1px solid;
	margin: 0 auto;
`;

const S = {
	Wrapper,
};
