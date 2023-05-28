import { flexAllCenter } from 'Styles/common';
import React from 'react';
import styled from 'styled-components';

const SoldoutCard = () => {
	return (
		<S.Container>
			<div>판매완료</div>
		</S.Container>
	);
};

export default SoldoutCard;

const Container = styled.div`
	width: 100%;
	min-width: 200px;
	max-width: 280px;
	height: 100%;
	overflow: hidden;
	background-color: rgba(101, 101, 101, 0.7);
	margin-right: 10px;
	border-radius: 10px;
	position: absolute;
	top: 0;
	left: 0;
	/* ${flexAllCenter} */
	display: flex;
	align-items: end;
	justify-content: center;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
	@media (min-width: 414px) {
		width: 200px;
	}
	@media (min-width: 600px) {
		width: 210px;
	}
	@media (min-width: 900px) {
		width: 220px;
	}
	@media (min-width: 1100px) {
		width: 230px;
	}
	@media (min-width: 1200px) {
		width: 240px;
	}
	@media (min-width: 1350px) {
		width: 280px;
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
