import { flexAllCenter } from 'Styles/common';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const ToggleBar = () => {
	const isDesktopOrMobile = useMediaQuery({ query: '(max-width: 768px' });
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

	const onClickToggle = page => {
		navigate(`/mypage/${page}`);
	};

	return (
		<>
			{isDesktopOrMobile !== true ? (
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
			) : (
				<S.MWrapper>
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
				</S.MWrapper>
			)}
		</>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	${flexAllCenter}
	width: 100%;
	height: 50px;
	& > div {
		margin: 0 35px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const MWrapper = styled.div`
	margin: 50px 0;
	${flexAllCenter}
	width: 414px;
	height: 70px;
	background-color: ${({ theme }) => theme.color.gray[100]};
	& > div {
		margin: 0 35px;
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const Menu = styled.div`
	:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.color.primary};
		background-color: ${({ theme }) => theme.color.gray[200]};
	}
	color: ${({ currentMenu }) => (currentMenu ? 'red' : 'black')};
`;

const S = {
	Wrapper,
	MWrapper,
	Menu,
};
