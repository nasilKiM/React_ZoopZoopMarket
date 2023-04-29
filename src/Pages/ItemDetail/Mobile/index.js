import { useState } from 'react';
import MobileBuyerDetailPage from './BuyerDetail/BuyerDetail';
import MobileSellerDetail from './SellerDetail/sellerDetail';

const MobileItemDetailPage = () => {
	const [state, setState] = useState(true);

	const onChangeState = () => {
		setState(prev => !prev);
	};
	return (
		<>
			<button onClick={onChangeState}>버튼</button>
			{state ? (
				<MobileBuyerDetailPage state={state} />
			) : (
				<MobileSellerDetail state={state} />
			)}
		</>
	);
};

export default MobileItemDetailPage;
