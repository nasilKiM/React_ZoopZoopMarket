import Preview from './Components/preview';
import Category from './Components/category';
import BannerAd from './Components/bannerAd';

import styled from 'styled-components';
import { basicSetting } from 'Styles/common';

const DesktopMainPage = () => {
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
	${basicSetting}
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
		${basicSetting}
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
