import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faChartLine,
	faCommentDots,
	faUser,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
	const [checked, setChecked] = useState(1);
	const currentRef = useRef();

	useEffect(() => {
		if (checked === currentRef.current) currentRef.current.checked();
	}, [currentRef]);

	const onClickNav = id => {
		currentRef.current = id;
	};

	return (
		<S.Wrapper>
			<S.NavBtn
				to="/main"
				id="1"
				ref={currentRef}
				onClick={e => onClickNav(e.target.id)}
			>
				<FontAwesomeIcon
					icon={faHouse}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				홈
			</S.NavBtn>
			<S.NavBtn to="/market_price" id="2" ref={currentRef}>
				<FontAwesomeIcon
					icon={faChartLine}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				시세조회
			</S.NavBtn>
			<S.AddContainer>
				<S.AddBtn to="/register">
					<FontAwesomeIcon
						icon={faPlus}
						color="white"
						cursor="pointer"
						fontSize="50px"
					/>
				</S.AddBtn>
			</S.AddContainer>
			<S.NavBtn to="/m-chat" id="3" ref={currentRef}>
				<FontAwesomeIcon
					icon={faCommentDots}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				채팅
			</S.NavBtn>
			<S.NavBtn to="/mypage" id="4" ref={currentRef}>
				<FontAwesomeIcon
					icon={faUser}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				내 정보
			</S.NavBtn>
		</S.Wrapper>
	);
};

export default BottomNav;

const Wrapper = styled.div`
	width: 410px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
	margin: 0 auto;
	position: fixed;
	bottom: 0;
	z-index: 999;
	background-color: ${({ theme }) => theme.color.white};
`;

const NavBtn = styled(Link)`
	text-decoration: none;
	width: 70px;
	height: 70px;
	padding: 12px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.color.black};
	:checked {
		background-color: yellow;
	}
`;

const AddContainer = styled.div`
	width: 100px;
	height: 70px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AddBtn = styled(Link)`
	width: 70px;
	height: 70px;
	border-radius: 35px;
	background-color: ${({ theme }) => theme.color.primary};

	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -35px;
	> * {
		border: 1px solid lime;
	}
`;

const S = {
	Wrapper,
	NavBtn,
	AddContainer,
	AddBtn,
};
