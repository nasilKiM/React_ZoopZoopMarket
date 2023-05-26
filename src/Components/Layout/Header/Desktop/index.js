import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faMagnifyingGlass,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import UserApi from 'Apis/userApi';
import TokenService from 'Repository/TokenService';

const WebHeader = () => {
	const navigate = useNavigate();
	const props = 'search_list';
	const isTablet = useMediaQuery({ maxWidth: 1050 });
	const [isHover, setIsHover] = useState(false);
	//검색창 모달
	const [isModalOpen, setIsModalOpen] = useState(false);
	//햄버거메뉴
	const [MenuIsOpen, setMenuIsOpen] = useState(false);
	//마이페이지 메뉴
	const [showOptions, setShowOptions] = useState(false);

	const toggleMenu = () => {
		setMenuIsOpen(MenuIsOpen => !MenuIsOpen);
	};

	const Modal = ({ isOpen, onClose, children }) => {
		return (
			<>
				{isOpen && (
					<ModalOverlay>
						<ModalContent>
							<CloseButton onClick={onClose}>&times;</CloseButton>
							{children}
						</ModalContent>
					</ModalOverlay>
				)}
			</>
		);
	};

	const word = ',';

	const logout = async () => {
		const res = await UserApi.logout();
		console.log(res);
		TokenService.removeToken();
		navigate('/');
	};

	const myPage = () => {
		console.log('클릭!!!!');
		navigate('/mypage');
	};

	return (
		<>
			<S.Wrapper>
				<S.Container isMobile={isTablet}>
					{isTablet ? (
						<>
							<div onClick={() => toggleMenu()}>
								{MenuIsOpen ? (
									<>
										<FontAwesomeIcon
											icon={faXmark}
											color="gray"
											cursor="pointer"
											fontSize="40px"
										/>
										<div disabled={!MenuIsOpen}>
											<MenuOpen>
												<S.Menu
													key={1}
													onClick={() => {
														console.log('2');
														navigate(`/search_list/${word}}/0`);
													}}
												>
													중고 거래
												</S.Menu>
												<S.Menu key={0} to="/search_list">
													무료 나눔
												</S.Menu>

												<S.Menu to="/market_price">실시간 시세</S.Menu>
											</MenuOpen>
										</div>
									</>
								) : (
									<FontAwesomeIcon
										icon={faBars}
										color="gray"
										cursor="pointer"
										fontSize="30px"
									/>
								)}
							</div>
							<TabletDiv>
								<Link to={'/main'}>
									<S.Logo src="/Assets/web_logo_edit4.png"></S.Logo>
								</Link>
							</TabletDiv>
						</>
					) : (
						<>
							<Link to={'/main'}>
								<S.Logo src="/Assets/web_logo_edit4.png"></S.Logo>
							</Link>

							<S.MenuList>
								<S.Menu
									key={1}
									onClick={() => {
										console.log('3');
										navigate(`/search_list/${word}/0`);
									}}
								>
									중고 거래
								</S.Menu>
								<S.Menu
									key={0}
									onClick={() => {
										navigate(`/search_list/${word}/1`);
									}}
								>
									무료 나눔
								</S.Menu>

								<S.Menu
									onClick={() => {
										console.log('3');
										navigate(`/market_price`);
									}}
								>
									실시간 시세
								</S.Menu>
							</S.MenuList>
						</>
					)}
					{isTablet ? (
						<Link>
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								color="gray"
								cursor="pointer"
								fontSize="30px"
								onClick={() => setIsModalOpen(!isModalOpen)}
							/>
							{isModalOpen && (
								<Modal>
									<SearchBar props={props} />
								</Modal>
							)}
						</Link>
					) : (
						<SearchBar props={props} />
					)}
					<S.Icon>
						<Link
							// to={'/mypage'}
							onMouseOver={() => {
								setIsHover(true);
							}}
							onMouseOut={() => {
								setIsHover(false);
							}}
						>
							<CategoryIcon
								src={
									isHover
										? '/Assets/Images/default_Profile_edit3.png'
										: '/Assets/Images/default_Profile_edit4.png'
								}
								onClick={() => setShowOptions(!showOptions)}
							/>
							{showOptions && (
								<MenuOptions onClick={() => setShowOptions(false)}>
									<S.Menu>
										<MenuOption to={'/mypage'}>마이페이지</MenuOption>
									</S.Menu>
									<S.Menu>
										<MenuOption onClick={logout}>로그아웃</MenuOption>
									</S.Menu>
								</MenuOptions>
							)}
						</Link>
						<Link to={'/chat'}>
							<button>채팅하기</button>
						</Link>
					</S.Icon>
				</S.Container>
			</S.Wrapper>

			{isModalOpen && (
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<SearchBar props={props} />
				</Modal>
			)}
		</>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}

	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding-bottom: 5px;

	& > div:second-child {
		width: 376px;
		height: 500px;
		position: absolute;
		left: 0px;
		transition: 1s;
	}
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
	background-color: ${({ theme }) => theme.color.gray[100]};
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 100px;
	gap: 10px;
	padding-top: 25px;
	padding-left: 20px;
	transition: 0.4s ease;
	border-radius: 0 0 5px 5px;
	box-shadow: 2px 4px 1px rgba(0, 0, 0, 0.2);
`;

const TabletDiv = styled.div`
	width: 100%;
	margin-left: 50px;
`;
const MenuList = styled.div`
	display: flex;
	padding-left: 5px;
	padding-right: 5px;
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

const Icon = styled.div`
	flex: ${props => (props.isMobile ? 1 : 2)};
	display: flex;
	justify-content: flex-end;
	gap: 15px;
	align-items: center;
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
	}
`;

const Logo = styled.img`
	max-width: 200px;
	margin-right: 20px;
`;

const CategoryIcon = styled.img`
	width: 40px;
	margin-left: 15px;
`;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 9999;
	display: flex;
	justify-content: center;
`;

const ModalContent = styled.div`
	background-color: transparent;
	border-radius: 4px;
	padding: 20px;
	display: flex;
	min-width: 400px;
	top: 80px;
	position: absolute;
	align-items: center;
`;

const CloseButton = styled.button`
	position: absolute;
	right: 10px;
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 60px;
`;

const MenuOptions = styled.div`
	position: absolute;

	top: 90%;
	height: 70px;
	transform: translateX(-20%);
	background-color: ${({ theme }) => theme.color.gray[100]};
	box-shadow: 2px 4px 1px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	text-align: center;
	align-items: center;
	padding-top: 10px;
	padding-left: 10px;
`;

const MenuOption = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	transition: background-color 0.3s;
	margin: 5px;
	display: block;

	&:hover {
		background-color: lightgray;
	}
`;

const S = {
	Wrapper,
	Container,
	MenuList,
	Menu,
	Icon,
	Logo,
	CategoryIcon,
};
