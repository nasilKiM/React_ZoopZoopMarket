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
			address: 'review',
		},
	];

	const onClickToggle = page => {
		navigate(`/mypage/${page}`);
	};

	return (
		<S.Wrapper>
			{toggleMenu.map(toggle => (
				<>
					<S.Menu
						onClick={() => onClickToggle(toggle.address)}
						currentMenu={current === toggle.address}
					>
						{toggle.title}
					</S.Menu>
				</>
			))}
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	margin: 0 0 50px;
	padding: 0 80px;
	${flexAllCenter}
	width: 100%;
	height: 50px;
	background-color: ${({theme}) => theme.color.gray[100]};
	& > div:first-child {
		border-left: none;
	}
	@media screen and (max-width: 414px) {
		width: 100%;
	}
`;

const Menu = styled.div`
	width: 200px;
	min-width: max-content;
	height: 50px;
	${flexAllCenter}
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	border-left: solid 1px ${({theme}) => theme.color.gray[200]};
	:hover {
		cursor: pointer;
		background-color: ${({theme}) => theme.color.gray[200]};
	}
	background-color: ${({ currentMenu }) => (currentMenu ? '#FFD1D1' : '#E9E9E9')};
	border-bottom: solid 3px ${({ currentMenu }) => (currentMenu ? '#FF3647' : '#E9E9E9')};

	@media screen and (max-width: 414px) {
		width: 20px;
		font-size: ${({ theme }) => theme.fontSize.micro};
	}
`;

const S = {
	Wrapper,
	Menu,
};
