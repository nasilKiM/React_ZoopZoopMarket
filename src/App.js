import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import GlobalStyles from 'Styles/global';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
// import { isDesktop } from 'react-device-detect';
// import m_router from 'Routes/routing-m';
import { theme } from 'Styles/theme';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ApiCustomError from 'Apis/@error';

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
							{/* {isDesktop ? (
						<RouterProvider router={router} />
					) : (
						<RouterProvider router={m_router} />
					)} */}
						</ThemeProvider>
					</QueryClientProvider>
				</RecoilRoot>
			</ErrorBoundary>
		</Suspense>
	);
}

export default App;
