import { useAuth } from 'Context/auth';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
	const {accessToken} = useAuth();

	return accessToken ? children : <Navigate to={`/`} />;
};

export default PrivateRoute;
