import BasicFooter from './Footer';
import { Outlet } from 'react-router-dom';
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
