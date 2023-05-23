import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MobileSideBar = ({ xPosition, setXposition, setMenuIsOpen, isOpen }) => {
	const { page } = useParams();
	page && console.log(page);

	useEffect(() => {
		if (page) {
			setMenuIsOpen(true);
			setXposition(0);
		}
	}, [page]);

	return (
		<S.Container xPosition={xPosition} isOpen={isOpen}>
			<S.Ul>
				<S.StyledLink to={'search_list'}>
					<S.Li>중고거래</S.Li>
				</S.StyledLink>
				<S.StyledLink to={'search_list'}>
					<S.Li>무료나눔</S.Li>
				</S.StyledLink>
				<S.StyledLink to={'market_price'}>
					<S.Li>시세조회</S.Li>
				</S.StyledLink>
			</S.Ul>
			<S.SettingZone>
				<div>로그아웃</div>
				<div>설정</div>
			</S.SettingZone>
		</S.Container>
	);
};

export default MobileSideBar;

const Container = styled.div`
	width: 200px;
	height: 30vh;
	background-color: ${({ theme }) => theme.color.gray[100]};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	padding: 30px;
	position: absolute;
	top: 100px;
	left: 0;
	/* transform: translateX(${({ xPosition }) => `${xPosition}px`}); */
	transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100vh')});
	transition: 0.4s ease;
`;

const Ul = styled.ul`
	margin-top: 10px;
	margin-bottom: 40px;
	font-size: ${({ theme }) => theme.fontSize.base};
`;

const Li = styled.li`
	margin-bottom: 20px;
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.color.primary};
	}
`;

const SettingZone = styled.div`
	border-top: solid 1px black;
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
	& > div {
		cursor: pointer;
		:hover {
			color: ${({ theme }) => theme.color.primary};
		}
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const S = {
	Container,
	Ul,
	Li,
	SettingZone,
	StyledLink,
};
