// 서치아이콘 + 모달 관련 로직

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchBar from 'Components/SearchBar/SearchBar';
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, children }) => {
	return (
		<>
			{isOpen && (
				<S.ModalOverlay>
					<S.ModalContent>
						<S.CloseButton onClick={onClose}>&times;</S.CloseButton>
						{children}
					</S.ModalContent>
				</S.ModalOverlay>
			)}
		</>
	);
};

const SearchIconModal = ({ isTablet }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const props = 'search_list';

	return (
		<>
			{isTablet ? (
				<div>
					<S.FontIcons
						icon={faMagnifyingGlass}
						color="gray"
						cursor="pointer"
						fontSize="30px"
						onClick={() => setIsModalOpen(!isModalOpen)}
					/>
					{isModalOpen && (
						<Modal>
							<SearchMobileBar props={props} setIsModalOpen={setIsModalOpen} />
						</Modal>
					)}
				</div>
			) : (
				<SearchBar props={props} setIsModalOpen={setIsModalOpen} />
			)}
			{isModalOpen && (
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<SearchBar props={props} setIsModalOpen={setIsModalOpen} />
				</Modal>
			)}
		</>
	);
};

export default SearchIconModal;

const FontIcons = styled(FontAwesomeIcon)`
	@media ${({ theme }) => theme.device.mobile} {
		font-size: 22px;
	}
`;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 9999;
	display: flex;
	justify-content: center;
`;

const ModalContent = styled.div`
	background-color: transparent;
	border-radius: 4px;
	padding: 20px;
	display: flex;
	width: 400px;
	top: 80px;
	position: absolute;
	align-items: center;
	@media ${({ theme }) => theme.device.mobile} {
		width: 300px;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	right: 30px;
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 60px;
	@media ${({ theme }) => theme.device.mobile} {
		font-size: 30px;
		right: -15px;
	}
`;

const SearchMobileBar = styled(SearchBar)``;

const S = {
	FontIcons,
	ModalOverlay,
	ModalContent,
	CloseButton,
};
