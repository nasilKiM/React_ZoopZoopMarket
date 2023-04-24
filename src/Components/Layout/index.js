import BasicHeader from './Header';
import BasicFooter from './Footer';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
	return (
		<>
			<BasicHeader />
			<Outlet />
			<BasicFooter />
		</>
	);
};

export default LayOut;
