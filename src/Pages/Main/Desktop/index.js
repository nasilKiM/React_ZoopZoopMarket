import styled from 'styled-components';
import Preview from './Components/preview';
import Search from './Components/search';

const MainPage = () => {
	return (
		<S.Wrapper>
			<Search />
			<Preview
				categoryData={1}
				userLocation={'도곡동'}
				userName={'이재훈'}
			></Preview>
			<Preview
				categoryData={0}
				userLocation={'도곡동'}
				userName={'이재훈'}
			></Preview>
			{/* <MobileMain /> */}
		</S.Wrapper>
	);
};

export default MainPage;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
	padding-top: 50px;
`;

const S = {
	Wrapper,
};
