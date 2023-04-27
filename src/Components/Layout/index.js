import { Outlet } from 'react-router-dom';
import WebHeader from './Header/Desktop';
import BasicFooter from './Footer';

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
