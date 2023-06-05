import { Navigate, useNavigate } from 'react-router-dom';

import TokenService from 'Repository/TokenService';

const PrivateRoute = ({ children }) => {
	const access_token = TokenService.getToken();
	const navigate = useNavigate();

	return access_token ? children : <Navigate to={`/`} />;
};

export default PrivateRoute;
