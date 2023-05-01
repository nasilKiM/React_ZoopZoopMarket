import { flexAlignCenter } from 'Styles/common';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MobileSideBar = ({ xPosition, setXpostion, setIsOpen }) => {
	const { page } = useParams();
	page && console.log(page);

	useEffect(() => {
		if (page) {
			setIsOpen(true);
			setXpostion(0);
		}
	}, [page]);

	return (
		<S.Container xPosition={xPosition}>
			<S.ProfileZone>
				<div>이미지</div>
				<S.ProfilInfo>
					<div>닉네임</div>
					<div>온도</div>
					<div>인증 동네</div>
				</S.ProfilInfo>
			</S.ProfileZone>
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
				<S.StyledLink to={'register'}>
					<S.Li>물품등록</S.Li>
				</S.StyledLink>
				<S.StyledLink to={'chat'}>
					<S.Li>나의 채팅</S.Li>
				</S.StyledLink>
				<S.StyledLink to={'mypage'}>
					<S.Li>마이페이지</S.Li>
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
	width: 300px;
	height: 70vh;
	background-color: ${({ theme }) => theme.color.gray};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	padding: 30px;
	position: absolute;
	top: 240px;
	left: 0;
	transform: translateX(${({ xPosition }) => `${xPosition}px`});
	transition: 0.4s ease;
`;

const ProfileZone = styled.div`
	padding-bottom: 20px;
	margin-bottom: 30px;
	${flexAlignCenter}
	border-bottom: solid 1px black;
`;

const ProfilInfo = styled.div`
	padding-left: 40px;
	line-height: 1.3rem;
`;

const Ul = styled.ul`
	height: 320px;
	border-bottom: solid 1px black;
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
	ProfileZone,
	ProfilInfo,
	Ul,
	Li,
	SettingZone,
	StyledLink,
};
