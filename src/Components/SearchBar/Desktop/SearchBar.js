import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
	return (
		<S.Wrap>
			<S.SearchInput placeholder="검색어를 입력해주세요" />
			<S.GlassBtn>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					color="gray"
					cursor="pointer"
					fontSize="20px"
				/>
			</S.GlassBtn>
		</S.Wrap>
	);
};
export default SearchBar;

const Wrap = styled.div`
	display: flex;
	border: 1px solid gray;
	width: 700px;
	height: 40px;
	position: relative;
	/* margin: 0 auto; */
`;
const SearchInput = styled.input`
	width: 90%;
	height: 95%;
	border: 0px;
	font-size: 16px;
	outline: none;
	margin-left: 20px;
`;

const GlassBtn = styled.div`
	position: absolute;
	right: 5%;
	top: 25%;
`;

const S = {
	Wrap,
	SearchInput,
	GlassBtn,
};
