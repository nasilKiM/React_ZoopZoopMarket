import styled from 'styled-components';
import RegisterBtn from 'Components/Buttons/RegisterBtn/RegisterBtn';
import { Link } from 'react-router-dom';
//import { MockAxios } from 'Apis/@core';
//import { useQuery } from 'react-query';
// import { Category, Preview } from '@mui/icons-material';
import TopBtn from 'Components/Buttons/TopBtn/TopBtn';
import Preview from './Components/preview';
import Category from './Components/category';

const DesktopMainPage = () => {
	//mockData용 =============
	// const { data } = useQuery(['product'], () => {
	//    return MockAxios.get('/product').then(res => {
	//       return res.data;
	//    });
	// });

	return (
		<S.Cover>
			<S.Wrapper>
				<Banner></Banner>
				<CategoryWrapper>
					<TitleBox>카테고리별 상품찾기</TitleBox>
					<Category />
				</CategoryWrapper>
			</S.Wrapper>
			{/* MockData용
         <Preview category={0} products={data}></Preview>
         <Preview category={1} products={data}></Preview> */}

			<S.PreviewBg>
				<Preview category={0}></Preview>
			</S.PreviewBg>
			<S.Blank></S.Blank>
			<S.PreviewBg>
				<Preview category={1}></Preview>
			</S.PreviewBg>
			<TopBtn />
			<Link to={'/register'}>
				<S.BtnSection>
					<RegisterBtn />
				</S.BtnSection>
			</Link>
		</S.Cover>
	);
};

export default DesktopMainPage;

const Cover = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	margin: 0 auto;
	padding-top: 10px;
`;

const PreviewBg = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.bg};
	padding: 30px 0;
	> * {
		width: 70%;
		min-width: 414px;
		max-width: 1200px;
		@media (max-width: 700px) {
			width: 95%;
		}
		@media (max-width: 800px) {
			width: 90%;
		}
		margin: 0 auto;
		padding-top: 10px;
	}
`;

const Banner = styled.div`
	width: 100%;
	height: 500px;
	background-color: gray;
`;

const Blank = styled.div`
	width: 100%;
	height: 50px;
`;

const TitleBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.primary[400]};
	padding-top: 30px;
	padding-bottom: 30px;
`;

const SearchSection = styled.div`
	width: 100%;
	border-top: 3px double ${({ theme }) => theme.color.subBeigeGreen};
	border-bottom: 3px double ${({ theme }) => theme.color.subBeigeGreen};
	padding: 40px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BtnSection = styled.div`
	width: 50px;
	height: 50px;
`;

const CategoryWrapper = styled.div`
	padding-bottom: 20px;
	margin-bottom: 30px;
`;

const S = {
	Cover,
	Wrapper,
	Blank,
	TitleBox,
	PreviewBg,
	SearchSection,
	BtnSection,
};
