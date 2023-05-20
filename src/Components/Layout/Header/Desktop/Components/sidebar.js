import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchSideBar = ({ yPosition, setYposition, setIsOpen }) => {
	const { page } = useParams();
	page && console.log(page);

	useEffect(() => {
		if (page) {
			setIsOpen(true);
			setYposition(0);
		}
	}, [page]);

	return (
		<S.Container yPosition={yPosition}>
			<div>이미지</div>
		</S.Container>
	);
};

export default SearchSideBar;

const Container = styled.div`
	width: 100%;
	height: 100px;
	background-color: ${({ theme }) => theme.color.gray[100]};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	padding: 30px;
	position: absolute;
	transform: translateY(${({ yPosition }) => `${yPosition}px`});
	transition: 0.4s ease;
`;

const S = {
	Container,
};
