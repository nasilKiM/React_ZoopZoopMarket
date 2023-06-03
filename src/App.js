import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ApiCustomError from 'Apis/@error';

import { RecoilRoot } from 'recoil';
import SocketProvider from 'Context/socket';
import { ThemeProvider } from 'styled-components';

import router from './Routes/routing';

import GlobalStyles from 'Styles/global';
import { theme } from 'Styles/theme';

function App() {
	const queryClient = new QueryClient();
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
						<ReactQueryDevtools initialIsOpen={false} />
						<ThemeProvider theme={theme}>
							<SocketProvider>
								<GlobalStyles />
								<RouterProvider router={router} />
							</SocketProvider>
						</ThemeProvider>
					</QueryClientProvider>
				</RecoilRoot>
			</ErrorBoundary>
		</Suspense>
	);
}

export default App;
