import SearchBar from 'Components/SearchBar/SearchBar';
import styled from 'styled-components';

const Search = () => {
	return (
		<S.Wrapper>
			<S.SearchBarWrapper>
				<SearchBar></SearchBar>
			</S.SearchBarWrapper>
		</S.Wrapper>
	);
};

export default Search;
const SearchBarWrapper = styled.div`
	width: 60%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	padding: 20px;
`;

const Wrapper = styled.div``;
const S = {
	SearchBarWrapper,
	Wrapper,
};
