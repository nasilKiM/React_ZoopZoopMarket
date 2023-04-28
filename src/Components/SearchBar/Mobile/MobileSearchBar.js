import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MobileSearchBar = () => {
	const [click, setClick] = useState(false);

	return (
		<S.Wrapper state={click}>
			<S.Wrap>
				<S.SearchInput
					placeholder="검색어를 입력해주세요"
					onClick={() => setClick(true)}
					onBlur={() => setClick(false)}
				/>
				<S.GlassBtn>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						color="gray"
						cursor="pointer"
						fontSize="20px"
					/>
				</S.GlassBtn>
			</S.Wrap>
		</S.Wrapper>
	);
};
export default MobileSearchBar;

const Wrapper = styled.div`
	width: 414px;
	height: 736px;
	border: 1px solid black;
	background-color: ${({ state }) => (state ? 'gray' : 'white')};
	opacity: ${({ state }) => (state ? 0.5 : 1)};
`;

const Wrap = styled.div`
	display: flex;
	border: 1px solid gray;
	border-radius: 10px;
	width: 80%;
	height: 40px;
	position: relative;
	background-color: #d9d9d9;
`;
const SearchInput = styled.input`
	border: 0px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	outline: none;
	margin-left: 20px;
	background-color: transparent;
`;

const GlassBtn = styled.div`
	position: absolute;
	right: 5%;
	top: 25%;
`;

const S = {
	Wrap,
	Wrapper,
	SearchInput,
	GlassBtn,
};
