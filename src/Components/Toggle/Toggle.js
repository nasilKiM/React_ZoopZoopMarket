import { flexAllCenter } from 'Styles/common';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const ToggleBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	
	const PathNameArr = location.pathname.split('/');
	const current = PathNameArr[2];
	
	useEffect(() => {
		navigate('/mypage/item');
	}, []);
	
	const toggleMenu = [
		{
			title: '내 등록템',
			address: 'item',
		},
		{
			title: '개인 정보 수정',
			address: 'user_edit',
		},
		{
			title: '내 관심템',
			address: 'interest',
		},
		{
			title: '가계부',
			address: 'account_book',
		},
		{
			title: '내 후기',
			address: '',
		},
	];
	
	const onClickToggle = (page) => {
		navigate(`/mypage/${page}`);
	};


	return (
		<S.Wrapper>
			{toggleMenu.map(toggle => (
				<>
					<S.Menu onClick={() => onClickToggle(toggle.address)} currentMenu={current === toggle.address}>
						{toggle.title}
					</S.Menu>
				</>
			))}
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	margin: 50px 0;
	${flexAllCenter}
	& > div {
		margin: 0 35px;
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	`;

const Menu = styled.div`
	:hover {
		cursor: pointer;
		color: ${({theme}) => theme.color.primary};
	}
	color: ${({currentMenu}) => (currentMenu ? 'red' : 'black')};
	`;

const S = {
	Wrapper,
	Menu,
};
