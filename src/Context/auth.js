import TokenService from 'Repository/TokenService';
import { useContext, useState, createContext, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
	const [accessToken, setAccessToken] = useState(TokenService.getToken());

	useEffect(() => {
		const token = TokenService.getToken();
		if (!token) return;
		setAccessToken(token);
	}, []);

	const login = token => {
		TokenService.setToken(token);
		setAccessToken(token);
	};

	const logout = () => {
		TokenService.removeToken();
		setAccessToken(null);
	};

	return (
		<AuthContext.Provider value={{ accessToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
