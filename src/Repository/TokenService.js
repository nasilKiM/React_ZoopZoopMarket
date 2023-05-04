const TOKEN_KEY = 'access_token';

const TokenService = {
	// set
	setToken(token) {
		localStorage.setItem(TOKEN_KEY, token);
	},
	// get
	getToken() {
		return localStorage.getItem(TOKEN_KEY);
	},
	// remove
	removeToken() {
		localStorage.removeItem(TOKEN_KEY);
	},
};
export default TokenService;
