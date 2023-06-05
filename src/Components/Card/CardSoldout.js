import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { flexAllCenter } from 'Styles/common';

const SoldoutCard = ({ index }) => {
	const navigate = useNavigate();

	const onClickCard = () => {
		navigate(`/item_detail/${index}`);
	};

	return (
		<S.Container onClick={onClickCard}>
			<div>판매완료</div>
		</S.Container>
	);
};

export default SoldoutCard;

const Container = styled.div`
	width: 100%;
	min-width: 160px;
	max-width: 280px;
	height: 370px;
	background-color: rgba(101, 101, 101, 0.7);
	margin-right: 10px;
	border-radius: 10px;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: end;
	justify-content: center;
	cursor: pointer;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
	@media (min-width: 350px) {
		width: 160px;
		height: 315px;
	}
	@media (min-width: 600px) {
		width: 200px;
		height: 320px;
	}
	@media (min-width: 900px) {
		width: 220px;
		height: 330px;
	}
	@media (min-width: 1100px) {
		width: 230px;
		height: 340px;
	}
	@media (min-width: 1200px) {
		width: 240px;
		height: 350px;
	}
	@media (min-width: 1350px) {
		width: 280px;
		height: 370px;
	}
	> div {
		${flexAllCenter};
		background-color: ${({ theme }) => theme.color.primary[100]};
		width: 80%;
		padding: 12px;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		margin-bottom: 30px;
	}
`;

const S = {
	Container,
};
