import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import LoadingPage from 'Components/Loading/Loading';
import SocketProvider from 'Context/socket';
import router from './Routes/routing';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'Styles/global';
import { theme } from 'Styles/theme';

function App() {
	const queryClient = new QueryClient();

	return (
		<Suspense fallback={<LoadingPage />}>
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
		</Suspense>
	);
}

export default App;
