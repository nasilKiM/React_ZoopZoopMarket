import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';

const SellerDetailPage = ({ state }) => {
	return (
		<S.Wrapper>
			<div>판매자페이지</div>
			<div>
				<div>판매중</div>
				<ul>
					<li>Edit</li>
					<li>Hide</li>
					<li>Delete</li>
				</ul>
			</div>
			<DetailHead />
			<div>
				<div>상세정보</div>
				<div>채팅 내역</div>
			</div>
			<DetailContent state={state} />
		</S.Wrapper>
	);
};

export default SellerDetailPage;

const Wrapper = styled.div`
	width: 80%;
	border: 1px solid;
	margin: 0 auto;
`;

const S = {
	Wrapper,
};
