import UserApi from 'Apis/userApi';
import TokenService from 'Repository/TokenService';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuBar = () => {
	let onChat = 1;
	const navigate = useNavigate();

	const logout = async () => {
		try {
			const res = await UserApi.logout();
			if (res.status === 200) {
				TokenService.removeToken();
				navigate('/');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<S.Bar>
			<S.Container>
				<S.LeftMenu>
					<S.Menu key={1} to="/search_list">
						중고 거래
					</S.Menu>
					<S.Menu key={0} to="/search_list">
						무료 나눔
					</S.Menu>

					<S.Menu to="/market_price">실시간 시세</S.Menu>
				</S.LeftMenu>
				<S.RightMenu>
					<span>닉네임</span>
					<S.LogoutMenu>
						<S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
					</S.LogoutMenu>
				</S.RightMenu>
			</S.Container>
		</S.Bar>
	);
};

export default MenuBar;

const Bar = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-size: ${({ theme }) => theme.fontWeight.bold};
	color: black;
	border-top: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

const Container = styled.div`
	width: 70%;
	min-width: 700px;
	max-width: 1200px;
	height: 50px;
	display: flex;
	margin: 0 auto;
	align-items: center;
	text-align: center;
	justify-content: center;
`;

const Menu = styled(Link)`
	color: ${({ theme }) => theme.color.black};
	height: 20px;
	text-decoration: none;
	padding-right: 20px;
	:hover {
		color: ${({ theme }) => theme.color.primary[400]};
	}
`;
const LeftMenu = styled.div`
	width: 100%;
	display: flex;
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const RightMenu = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	span {
		font-size: ${({ theme }) => theme.fontSize.sm};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		text-align: center;
		padding-left: 10px;
	}
`;

const LogoutMenu = styled(Link)`
	color: ${({ theme }) => theme.color.black};
	text-decoration: none;
	padding-left: 20px;
`;

const LogoutButton = styled.div`
	padding: 10px 20px;
	border-radius: 20px;
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.gray[200]};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.color.primary[300]};
	}
`;

const S = {
	Bar,
	Container,
	Menu,
	RightMenu,
	LeftMenu,
	LogoutMenu,
	LogoutButton,
};
