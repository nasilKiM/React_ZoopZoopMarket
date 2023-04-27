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
			<S.NavBtn id="1" ref={currentRef} onClick={e => onClickNav(e.target.id)}>
				<FontAwesomeIcon
					icon={faHouse}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				홈
			</S.NavBtn>
			<S.NavBtn id="2" ref={currentRef}>
				<FontAwesomeIcon
					icon={faChartLine}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				시세조회
			</S.NavBtn>
			<S.AddContainer>
				<S.AddBtn>
					<FontAwesomeIcon
						icon={faPlus}
						color="white"
						cursor="pointer"
						fontSize="50px"
					/>
				</S.AddBtn>
			</S.AddContainer>
			<S.NavBtn id="3" ref={currentRef}>
				<FontAwesomeIcon
					icon={faCommentDots}
					// color="white"
					cursor="pointer"
					fontSize="25px"
				/>
				채팅
			</S.NavBtn>
			<S.NavBtn id="4" ref={currentRef}>
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
	width: 414px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
`;

const NavBtn = styled.div`
	width: 70px;
	height: 70px;
	padding: 12px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.sm};
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

const AddBtn = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 35px;
	background-color: ${({ theme }) => theme.color.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -35px;
`;

const S = {
	Wrapper,
	NavBtn,
	AddContainer,
	AddBtn,
};
