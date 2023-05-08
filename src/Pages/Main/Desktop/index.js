import styled from 'styled-components';
import Preview from './Components/preview';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import TokenService from 'Repository/TokenService';
import { Axios } from 'Apis/@core';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DesktopMainPage = () => {
	const navigate = useNavigate();
	const logout = async () => {
		const res = await Axios.get('/api/user/logout');
		console.log(res);
		TokenService.removeToken();
		navigate('/');
	};

	const [data, setData] = useState({
		freeProduct: [],
		usedProduct: [],
		region: '',
	});

	const cardList = async () => {
		const res = await Axios.get('/api/product');
		console.log('----->', res);
		setData(res.data);
	};

	useEffect(() => {
		cardList();
	}, []);

	return (
		<S.Wrapper>
			<button onClick={logout}>로그아웃</button>
			<S.SearchSection>
				<SearchBar />
			</S.SearchSection>
			<Preview products={data.freeProduct}></Preview>
			<Preview products={data.usedProduct}></Preview>
		</S.Wrapper>
	);
};

export default DesktopMainPage;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
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
const S = {
	Wrapper,
	SearchSection,
};
