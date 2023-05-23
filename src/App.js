import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
// import { isDesktop } from 'react-device-detect';
// import m_router from 'Routes/routing-m';
import { theme } from 'Styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient({});
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
					{/* {isDesktop ? (
						<RouterProvider router={router} />
					) : (
						<RouterProvider router={m_router} />
					)} */}
				</ThemeProvider>
			</QueryClientProvider>
		</RecoilRoot>
	);
}

export default App;
