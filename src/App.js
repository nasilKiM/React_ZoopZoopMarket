import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
// import { isDesktop } from 'react-device-detect';
// import m_router from 'Routes/routing-m';
import { theme } from 'Styles/theme';
import SocketProvider from 'Context/socket';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	const queryClient = new QueryClient({});
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<ThemeProvider theme={theme}>
					<SocketProvider>
						<GlobalStyles />
						<RouterProvider router={router} />
					</SocketProvider>
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
