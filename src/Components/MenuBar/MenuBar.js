import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBar = () => {
	let onChat = 1;

	return (
		<S.Bar>
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
				<S.Menu to="/chat">
					<S.MyChat props={onChat}>MY CHAT</S.MyChat>
				</S.Menu>

				<S.Menu to="/mypage">MY PAGE</S.Menu>
			</S.RightMenu>
		</S.Bar>
	);
};

export default MenuBar;

const Bar = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-size: ${({ theme }) => theme.fontWeight.bold};
	color: black;
`;

const Menu = styled(Link)`
	color: ${({ theme }) => theme.color.black};
	text-decoration: none;
	padding-right: 10px;
`;
const LeftMenu = styled.div`
	width: 100%;
	display: flex;
`;

const RightMenu = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;
const MyChat = styled.div`
	color: ${props =>
		props.props === 1
			? ({ theme }) => theme.color.primary
			: ({ theme }) => theme.color.black};
`;
const S = {
	Bar,
	Menu,
	RightMenu,
	LeftMenu,
	MyChat,
};
