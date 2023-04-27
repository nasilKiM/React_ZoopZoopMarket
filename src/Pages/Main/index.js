import MenuBar from 'Components/MenuBar/MenuBar';
import Search from './Components/search';
import Preview from './Components/preview';

const MainPage = () => {
	return (
		<div>
			<MenuBar></MenuBar>
			<Search></Search>
			<Preview
				categoryData={1}
				userLocation={'도곡동'}
				userName={'이재훈'}
			></Preview>
		</div>
	);
};

export default MainPage;
