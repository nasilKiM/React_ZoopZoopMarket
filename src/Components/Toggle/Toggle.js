import { useLocation, useNavigate } from 'react-router-dom';

import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ToggleBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const PathNameArr = location.pathname.split('/');
	const current = PathNameArr[2];

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
	width: 100%;
	position: fixed;
	top: 12vh;
	z-index: 100;
	height: 40px;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const Wrapper = styled.div`
	width: 70%;
	min-width: 350px;
	max-width: 1200px;
	height: 40px;
	${flexAllCenter}
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(5, 1fr);
	position: fixed;
	top: 12vh;
	justify-content: center;
	left: 50%;
	transform: translateX(-50%);
	@media ${({ theme }) => theme.device.tablet} {
		min-width: 500px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		min-width: 100%;
	}
`;

const Menu = styled.div`
	height: 40px;
	${flexAllCenter}
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ currentMenu }) =>
		currentMenu ? '#FFD1D1' : '#E9E9E9'};
	border-bottom: solid 3px
		${({ currentMenu }) => (currentMenu ? '#FF3647' : '#E9E9E9')};
	:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.color.gray[200]};
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
	@media ${({ theme }) => theme.device.mobile} {
		font-size: ${({ theme }) => theme.fontSize.es};
		width: max-content;
	}
`;

const S = {
	Sticky,
	Wrapper,
	Menu,
};
