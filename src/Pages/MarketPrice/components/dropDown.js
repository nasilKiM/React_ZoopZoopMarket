import React, { useState } from 'react';

const DropdownComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState('');

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = item => {
		setSelectedItem(item);
		setIsOpen(false);
	};

	return (
		<div>
			<button onClick={toggleDropdown}>Dropdown</button>
			{isOpen && (
				<ul>
					<li onClick={() => handleItemClick('1주일')}>1주일</li>
					<li onClick={() => handleItemClick('1달')}>1달</li>
					<li onClick={() => handleItemClick('3개월')}>3개월</li>
					<li onClick={() => handleItemClick('6개월')}>6개월</li>
				</ul>
			)}
			{selectedItem && <p>선택된 항목: {selectedItem}</p>}
		</div>
	);
};

export default DropdownComponent;
