import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';

function App() {
	const queryClient = new QueryClient({});
	return (
		<RecoilRoot client={queryClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default App;
