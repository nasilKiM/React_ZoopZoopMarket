import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ props }) => {
	// props가 search면 search_list페이지로,
	//marketPrice면 market_price페이지로 전달되어 오면
	//navigate에 props를 전달하여 해당 props에 맞는 페이지로 이동하고 싶었으나 모든 컴포넌트에서 props를 선언해줘야 하는 부분이라 충돌이 우려되어 아직 안함.
	const navigate = useNavigate();

	const onSearch = async e => {
		e.preventDefault();

		if (!e.target.searchKey.value) {
			return alert('검색어를 입력해주세요!');
		}
		try {
			let searchWord = e.target.searchKey.value;
			navigate(`/${props}/${searchWord}`);
			// navigate(`/${props}/${searchWord}`);
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
	flex: 3;
	width: 100%;
	min-width: 100px;
	max-width: 300px;
	height: 40px;
	position: relative;
	border: 3px solid ${({ theme }) => theme.color.gray[100]};
	background-color: ${({ theme }) => theme.color.gray[100]};
	border-radius: 20px;
`;

const SearchInput = styled.input`
	width: 90%;
	border: 0px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	outline: none;
	margin-left: 20px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.color.gray[100]};
	text-overflow: ellipsis;
	@media (min-width: 414px) {
		width: 70%;
	}
`;

const GlassBtn = styled.button`
	width: 40px;
	height: 37px;
	position: absolute;
	right: 0%;
	border-radius: 50px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
`;

const S = {
	Wrap,
	SearchInput,
	GlassBtn,
};
