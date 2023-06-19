import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMediaQuery } from 'react-responsive';

import TokenService from 'Repository/TokenService';
import NewMessage from './Components/newMessage';
import SearchIconModal from './Components/searchIconModal';
import useMouseDownEvent from 'Hooks/Headers/use-mousedown-event';
import MenuList from './Components/menuList';

import { chatIcon } from 'Atoms/showChatIcon.atom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { basicSetting, flexAllCenter } from 'Styles/common';
import { useAuth } from 'Context/auth';

const WebHeader = ({ so }) => {
	const wrapperRef = useRef();
	const showRef = useRef();
	const hamburgerRef = useRef();
	const hamburgerShowRef = useRef();

	const navigate = useNavigate();

	const isTablet = useMediaQuery({ maxWidth: 1050 });

	const [isHover, setIsHover] = useState(false);
	const [isClickProfileIcon, setIsClickProfileIcon] = useState(false);
	const [MenuIsOpen, setMenuIsOpen] = useState(false);
	const [popupMsg, setPopupMsg] = useState();
	const [showChatIcon, setShowChatIcon] = useRecoilState(chatIcon);

	const { logout } = useAuth();

	useMouseDownEvent({
		showRef,
		MenuIsOpen,
		hamburgerRef,
		hamburgerShowRef,
		wrapperRef,
		isClickProfileIcon,
		setMenuIsOpen,
		setIsClickProfileIcon,
	});

	useEffect(() => {
		so?.emit('connect-user', { token: TokenService.getToken() });
		so?.on('newMessage', data => {
			setPopupMsg(data);
			setShowChatIcon(true);
		});
	}, [so]);

	const toggleMenu = () => {
		setMenuIsOpen(!MenuIsOpen);
	};

	const handleProfileIcon = e => {
		if (wrapperRef.current?.contains(e.target)) {
			setIsClickProfileIcon(!isClickProfileIcon);
		}
	};

	return (
		<>
			<S.Wrapper>
				{popupMsg && !(location.pathname === '/chat') && (
					<NewMessage popupMsg={popupMsg} setPopupMsg={setPopupMsg} />
				)}
				<S.Container isMobile={isTablet}>
					{isTablet ? (
						<>
							<div onClick={toggleMenu}>
								{MenuIsOpen ? (
									<>
										<S.FontIcons
											icon={faXmark}
											color="gray"
											cursor="pointer"
											fontSize="35px"
											ref={hamburgerRef}
										/>

										<S.MenuOpen ref={hamburgerShowRef}>
											<MenuList />
										</S.MenuOpen>
									</>
								) : (
									<S.FontIcons
										icon={faBars}
										color="gray"
										cursor="pointer"
										fontSize="25px"
									/>
								)}
							</div>
							<S.TabletDiv>
								<Link to={'/main'}>
									<S.Logo src="/Assets/web_logo_edit4.png"></S.Logo>
								</Link>
							</S.TabletDiv>
						</>
					) : (
						<>
							<Link to={'/main'}>
								<S.Logo src="/Assets/web_logo_edit4.png"></S.Logo>
							</Link>

							<S.MenuListWrapper>
								<MenuList />
							</S.MenuListWrapper>
						</>
					)}
					<SearchIconModal isTablet={isTablet} />
					<S.Icon>
						<div>
							<S.CategoryIcon
								src={
									isHover
										? '/Assets/Images/default_Profile_edit3.png'
										: '/Assets/Images/default_Profile_edit4.png'
								}
								onClick={handleProfileIcon}
								ref={wrapperRef}
								onMouseOver={() => {
									setIsHover(true);
								}}
								onMouseOut={() => {
									setIsHover(false);
								}}
							/>
							{isClickProfileIcon && (
								<S.MenuOptionWrapper ref={showRef}>
									<S.Menu
										onClick={() => {
											navigate('/mypage/item');
											setIsClickProfileIcon(false);
										}}
									>
										<MenuOption>마이페이지</MenuOption>
									</S.Menu>
									<S.Menu>
										<MenuOption onClick={logout}>로그아웃</MenuOption>
									</S.Menu>
								</S.MenuOptionWrapper>
							)}
						</div>
						<S.ChatLink to={'/chat'}>
							<div>
								{showChatIcon && (
									<FontAwesomeIcon
										icon={faComment}
										style={{ color: '#FF3647' }}
									/>
								)}
							</div>
							<button>채팅하기</button>
						</S.ChatLink>
					</S.Icon>
					<S.SearchMobile onClick={logout}>로그아웃</S.SearchMobile>
				</S.Container>
			</S.Wrapper>
		</>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	${basicSetting}
	${flexAllCenter}
	font-family: 'Nanum_extraBold';
	padding-bottom: 5px;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: ${props =>
		props.isMobile ? 'space-around' : 'space-between'};
	padding-top: 30px;
`;

const MenuOpen = styled.div`
	width: 145px;
	height: 130px;
	background-color: ${({ theme }) => theme.color.white};
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 80px;
	gap: 10px;
	padding-top: 25px;
	padding-left: 20px;
	transition: 0.4s ease;
	border-radius: 0 0 5px 5px;
	box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.2);
`;

const Menu = styled.div`
	color: ${({ theme }) => theme.color.black};
	height: 20px;
	width: 110px;
	text-decoration: none;
	padding-right: 10px;
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const TabletDiv = styled.div`
	width: 100%;
	margin-left: 50px;
	@media (max-width: 700px) {
		margin-left: 20px;
	}
`;

const Logo = styled.img`
	width: 100%;
	min-width: 120px;
	max-width: 200px;
	margin-right: 20px;
	@media (max-width: 700px) {
		padding-right: 10px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 135px;
	}
`;

const MenuListWrapper = styled.div`
	display: flex;
	padding-left: 55px;
`;

const Icon = styled.div`
	flex: ${props => (props.isMobile ? 1 : 2)};
	display: flex;
	justify-content: flex-end;
	gap: 15px;
	align-items: center;
	@media (max-width: 700px) {
		gap: 10px;
	}
	button {
		display: inline-block;
		color: ${({ theme }) => theme.color.black};
		border: none;
		text-decoration: none;
		padding: 11px 15px;
		width: 90px;
		border-radius: 10px;
		font-size: ${({ theme }) => theme.fontSize.sm};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		color: ${({ theme }) => theme.color.white};
		background-color: ${({ theme }) => theme.color.gray[200]};
		cursor: pointer;
		&:hover {
			background-color: ${({ theme }) => theme.color.primary[300]};
		}
		@media (max-width: 700px) {
			width: 75px;
			padding: 11px 9px;
			font-size: ${({ theme }) => theme.fontSize.xs};
		}
	}
`;

const CategoryIcon = styled.img`
	width: 40px;
	margin-left: 15px;
	cursor: pointer;
	@media (max-width: 700px) {
		width: 35px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const MenuOptionWrapper = styled.div`
	position: absolute;
	top: 80%;
	height: 70px;
	transform: translateX(-20%);
	background-color: ${({ theme }) => theme.color.white};
	box-shadow: 2px 4px 1px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	text-align: center;
	align-items: center;
	padding-top: 10px;
	padding-left: 10px;
`;

const MenuOption = styled.div`
	cursor: pointer;
	text-decoration: none;
	transition: background-color 0.3s;
	margin: 5px;
	display: block;
`;

const ChatLink = styled(Link)`
	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
	position: relative;
	& > div {
		position: absolute;
		right: -5px;
		top: -5px;
	}
`;

const FontIcons = styled(FontAwesomeIcon)`
	@media ${({ theme }) => theme.device.mobile} {
		font-size: 22px;
	}
`;

const SearchMobile = styled.button`
	display: none;
	@media ${({ theme }) => theme.device.mobile} {
		display: block;
		border: none;
		padding: 7px 3px;
		width: 90px;
		border-radius: 10px;
		font-size: ${({ theme }) => theme.fontSize.xs};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		color: ${({ theme }) => theme.color.white};
		background-color: ${({ theme }) => theme.color.primary[300]};
		margin-left: 15px;
	}
`;

const S = {
	Wrapper,
	Container,
	MenuOpen,
	Menu,
	TabletDiv,
	Logo,
	MenuListWrapper,
	Icon,
	CategoryIcon,
	MenuOptionWrapper,
	MenuOption,
	ChatLink,
	FontIcons,
	SearchMobile,
};
