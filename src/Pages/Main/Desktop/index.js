//import { MockAxios } from 'Apis/@core';
//import { useQuery } from 'react-query';
// import { Category, Preview } from '@mui/icons-material';
import Preview from './Components/preview';
import Category from './Components/category';
import BannerAd from './Components/bannerAd';

import styled from 'styled-components';

const DesktopMainPage = () => {
	//mockData용 =============
	// const { data } = useQuery(['product'], () => {
	//    return MockAxios.get('/product').then(res => {
	//       return res.data;
	//    });
	// });

	return (
		<S.Cover>
			<S.Banner>
				<BannerAd />
			</S.Banner>
			<S.Wrapper>
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
			<S.PreviewBg>
				<Preview category={1}></Preview>
			</S.PreviewBg>
		</S.Cover>
	);
};

export default DesktopMainPage;

const Cover = styled.div`
	width: 100%;
`;

const Banner = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const Wrapper = styled.div`
	width: 70%;
	min-width: 360px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 900px) {
		width: 90%;
	}
	margin: 0 auto;
	padding-top: 10px;
`;

const CategoryWrapper = styled.div`
	margin-bottom: 30px;
`;

const TitleBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.primary[400]};
	padding-top: 30px;
	padding-bottom: 30px;
`;

const PreviewBg = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.bg};
	padding: 30px 0;
	margin-bottom: 50px;
	> * {
		width: 70%;
		min-width: 350px;
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

const S = {
	Cover,
	Banner,
	Wrapper,
	TitleBox,
	PreviewBg,
};
