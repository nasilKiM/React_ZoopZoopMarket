import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Axios } from 'Apis/@core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
	const navigate = useNavigate();

	const [word, setWord] = useState('');

	const onSearch = async e => {
		e.preventDefault();

		try {
			let sample = e.target.searchKey.value;
			setWord(sample);
			console.log('!!!!!!!!!!!!!!!!!!!!!', word);
			const res = await Axios.get('/api/product/search', {
				params: {
					keyword: word,
					page: 1,
				},
			});

			//console.log('>>>>>>>>>>>>>>>>>>', res.config.params.keyword);
			console.log(res);
			navigate('/search_list');
		} catch (err) {
			console.log(err);
			//setSearchKey(err);
		}
	};

	// console.log(searchKey);

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
