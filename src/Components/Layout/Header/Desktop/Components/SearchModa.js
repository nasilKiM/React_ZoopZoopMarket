import React, { useState } from 'react';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				color="gray"
				cursor="pointer"
				fontSize="30px"
				onClick={handleOpenModal}
			/>

			<ReactModal isOpen={isOpen} onClose={handleCloseModal}>
				<SearchBar props="search_list" />
			</ReactModal>
		</>
	);
};

export default SearchModal;
