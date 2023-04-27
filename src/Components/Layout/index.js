import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer';
import WebHeader from './Header/Desktop';

const LayOut = () => {
	return (
		<>
			<WebHeader />
			<Outlet />
			<BasicFooter />
		</>
	);
};

export default LayOut;
