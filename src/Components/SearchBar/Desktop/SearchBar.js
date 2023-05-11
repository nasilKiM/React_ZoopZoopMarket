import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ props }) => {
	// props가 search면 search_list페이지로,
	//marketPrice면 market_price페이지로
	const navigate = useNavigate();

	const onSearch = async e => {
		e.preventDefault();

		try {
			let searchWord = e.target.searchKey.value;
			navigate(`/${props}/${searchWord}`);
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

const GlassBtn = styled.button`
	position: absolute;
	right: 5%;
	top: 25%;
`;

const S = {
	Wrap,
	SearchInput,
	GlassBtn,
};
