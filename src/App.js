import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import GlobalStyles from 'Styles/global';

function App() {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
