// import { RouterProvider } from 'react-router-dom';
// import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import MobileLoginPage from 'Pages/Form/Login/Mobile/MobileLoginPage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{/* <RouterProvider router={router} /> */}
			<MobileLoginPage />
		</ThemeProvider>
	);
}

export default App;
