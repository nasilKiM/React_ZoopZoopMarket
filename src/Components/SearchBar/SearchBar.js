import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
	return (
		<Wrap>
			<SearchInput placeholder="검색어를 입력해주세요" />
			<div>
				<FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
			</div>
		</Wrap>
	);
};
export default SearchBar;

const Wrap = styled.div`
	border: 1px solid gray;
	border-radius: 20px;
	width: 500px;
	height: 40px;
`;
const SearchInput = styled.input`
	border: 1px solid #f1f1f1;
	border-radius: 50px;
	width: 100%;
	height: 100%;
`;
