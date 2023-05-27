import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
// import { isDesktop } from 'react-device-detect';
// import m_router from 'Routes/routing-m';
import { theme } from 'Styles/theme';
import SocketProvider from 'Context/socket';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ApiCustomError from 'Apis/@error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient({});
	return (
		<Suspense>
			<ErrorBoundary
				fallback={<div>에러발생!!</div>}
				onError={error => {
					const { response } = error;
					const err = new ApiCustomError(response.data, response.status);
					alert(err);
				}}
			>
				<RecoilRoot>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={theme}>
							<GlobalStyles />
							<RouterProvider router={router} />
						</ThemeProvider>
					</QueryClientProvider>
				</RecoilRoot>
			</ErrorBoundary>
		</Suspense>
	);
}

export default App;
