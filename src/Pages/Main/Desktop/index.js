import styled from 'styled-components';
import Preview from './Components/preview';
import RegisterBtn from 'Components/Buttons/RegisterBtn/RegisterBtn';
import { Link } from 'react-router-dom';
import TopBtn from 'Components/Buttons/TopBtn/TopBtn';
import Category from './Components/category';
import { MockAxios } from 'Apis/@core';
import { useQuery } from 'react-query';

const DesktopMainPage = () => {
	//mockData용 =============
	const { data } = useQuery(['product'], () => {
		return MockAxios.get('/product').then(res => {
			return res.data;
		});
	});

	return (
		<S.Wrapper>
			<TitleBox>카테고리별 상품찾기</TitleBox>
			<CategoryWrapper>
				<Category />
			</CategoryWrapper>
			<Preview category={0} products={data}></Preview>
			<Preview category={1} products={data}></Preview>
			<TopBtn />
			<Link to={'/register'}>
				<S.BtnSection>
					<RegisterBtn />
				</S.BtnSection>
			</Link>
		</S.Wrapper>
	);
};

export default DesktopMainPage;

const Wrapper = styled.div`
	width: 80%;
	min-width: 700px;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 10px;
`;
const TitleBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.primary};
	padding-top: 30px;
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
	margin-top: 20px;
	padding-bottom: 20px;
`;

const S = {
	Wrapper,
	TitleBox,
	SearchSection,
	BtnSection,
};
