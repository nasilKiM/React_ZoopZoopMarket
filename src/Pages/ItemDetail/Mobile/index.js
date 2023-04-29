import { useState } from 'react';
import MobileBuyerDetailPage from './BuyerDetail/BuyerDetail';
import MobileSellerDetail from './SellerDetail/sellerDetail';
import styled from 'styled-components';

const MobileItemDetailPage = () => {
	const [state, setState] = useState(true);

	const onChangeState = () => {
		setState(prev => !prev);
	};
	return (
		<S.Wrapper>
			<button onClick={onChangeState}>버튼</button>
			{state ? (
				<MobileBuyerDetailPage state={state} />
			) : (
				<MobileSellerDetail state={state} />
			)}
		</S.Wrapper>
	);
};

export default MobileItemDetailPage;

const Wrapper = styled.div`
	width: 414px;
	margin: 0 auto;
`;

const S = {
	Wrapper,
};
