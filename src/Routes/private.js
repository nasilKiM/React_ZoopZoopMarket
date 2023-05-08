import TokenService from 'Repository/TokenService';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const access_token = TokenService.getToken();
	const navigate = useNavigate();

	return access_token ? children : <Navigate to={`/`} />;
};
export default PrivateRoute;
