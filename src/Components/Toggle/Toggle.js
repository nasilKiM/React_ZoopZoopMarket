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
		<S.Sticky>
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
		</S.Sticky>
	);
};

export default ToggleBar;

const Sticky = styled.div`
	position: relative;
	z-index: 100;
`;

const Wrapper = styled.div`
	width: 70%;
	height: 40px;
	${flexAllCenter}
	background-color: ${({theme}) => theme.color.gray[100]};
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(5, 1fr);
	position: fixed;
	top: 12vh;
	left: 50%;
  	transform: translateX( -50% );
	@media ${({ theme }) => theme.device.laptop} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;
	}
`;

const Menu = styled.div`
	min-width: min-content;
	white-space: nowrap;
	height: 40px;
	${flexAllCenter}
	font-size: 0.8em;
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	:hover {
		cursor: pointer;
		background-color: ${({theme}) => theme.color.gray[200]};
	}
	background-color: ${({ currentMenu }) => (currentMenu ? '#FFD1D1' : '#E9E9E9')};
	border-bottom: solid 3px ${({ currentMenu }) => (currentMenu ? '#FF3647' : '#E9E9E9')};
`;

const S = {
	Sticky,
	Wrapper,
	Menu,
};
