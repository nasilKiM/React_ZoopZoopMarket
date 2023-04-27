// import { RouterProvider } from 'react-router-dom';
// import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import MobileSearchBar from 'Components/SearchBar/Mobile/MobileSearchBar';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{/* <RouterProvider router={router} /> */}
			<MobileSearchBar />
		</ThemeProvider>
	);
}

export default App;
