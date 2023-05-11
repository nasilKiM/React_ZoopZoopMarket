import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const navigate = useNavigate();

	const onSearch = async e => {
		e.preventDefault();

		try {
			let searchWord = e.target.searchKey.value;
			navigate(`/search_list/${searchWord}`);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<S.Wrap onSubmit={onSearch}>
			<S.SearchInput placeholder="검색어를 입력해주세요" name="searchKey" />
			<S.GlassBtn type="submit">
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

const Wrap = styled.form`
	display: flex;
	border: 1px solid gray;
	width: 100%;
	min-width: 700px;
	max-width: 1000px;
	height: 40px;
	position: relative;
`;

const SearchInput = styled.input`
	width: 90%;
	height: 95%;
	border: 0px;
	font-size: 16px;
	outline: none;
	margin-left: 20px;
`;

const GlassBtn = styled.button`
	position: absolute;
	right: 5%;
	top: 25%;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:focus {
		outline: none;
	}
`;

const S = {
	Wrap,
	SearchInput,
	GlassBtn,
};
