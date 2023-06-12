import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuList = () => {
	const navigate = useNavigate();

	return (
		<>
			<S.Menu
				key={1}
				onClick={() => {
					navigate(`/search_list/${word}/0`);
				}}
			>
				중고 거래
			</S.Menu>
			<S.Menu
				key={0}
				onClick={() => {
					return navigate(`/search_list/${word}/1`);
				}}
			>
				무료 나눔
			</S.Menu>

			<S.Menu
				onClick={() => {
					return navigate(`/market_price`);
				}}
			>
				실시간 시세
			</S.Menu>
		</>
	);
};

export default MenuList;

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

const S = {
	Menu,
};
