import { useState } from 'react';

import SellerDetailPage from './SellerDetail/SellerDetail';
import BuyerDetailPage from './BuyerDetail/BuyerDetail';

const ItemDetailPage = () => {
	const [state, setState] = useState(true);

	const onChangeState = () => {
		setState(prev => !prev);
	};
	return (
		<>
			<button onClick={onChangeState}>버튼</button>
			{state ? (
				<BuyerDetailPage state={state} />
			) : (
				<SellerDetailPage state={state} />
			)}
		</>
	);
};

export default ItemDetailPage;
