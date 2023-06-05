import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';

import AlertModal from 'Components/Alert/alertModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchBar = ({ props, setIsModalOpen }) => {
	const navigate = useNavigate();
	const searchInputRef = useRef(null);
	const location = useLocation();
	const pathOption = location.pathname.split('/')[1];
	const [modal, setModal] = useState(false);
	const { showBoundary } = useErrorBoundary();

	const onSearch = async e => {
		e.preventDefault();

		if (!e.target.searchKey.value) {
			return setModal(true);
		}
		try {
			let searchWord = e.target.searchKey.value;
			navigate(`/${props}/${searchWord}`);
			setIsModalOpen(false);
		} catch (error) {
			showBoundary(error);
		}
	};

	useEffect(() => {
		if (pathOption == 'search_list') {
			return;
		} else {
			searchInputRef.current.value = '';
		}
	}, [pathOption]);

	return (
		<S.Wrap onSubmit={onSearch}>
			<S.SearchInput
				autoFocus
				placeholder="검색어를 입력해주세요"
				name="searchKey"
				ref={searchInputRef}
			/>
			<S.GlassBtn type="submit">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					color="gray"
					cursor="pointer"
					fontSize="20px"
				/>
			</S.GlassBtn>
			{modal && (
				<>
					<AlertModal
						content={'검색어를 입력해주세요!'}
						props={'/main'}
						setModal={setModal}
					/>
				</>
			)}
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
