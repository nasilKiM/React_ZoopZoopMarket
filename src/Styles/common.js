import { css } from 'styled-components';

export const ModalBackground = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
`;

export const flexAllCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexAlignCenter = css`
	display: flex;
	align-items: center;
`;

export const flexJustifyCenter = css`
	display: flex;
	justify-content: center;
`;

export const flexSpaceBetween = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const title = css`
	font-size: 48px;
	line-height: 16px;
	font-weight: bold;
`;

// grid
export const gridAllCenter = css`
	display: grid;
	justify-items: center;
	align-items: center;
`;

export const gridColumn = num => css`
	grid-template-columns: repeat(${num}, 1fr);
	row-gap: 30px;
	column-gap: 30px;
`;

export const gridGap = {
	mobile: css`
		row-gap: 15px;
		column-gap: 15px;
	`,
	tablet: css`
		row-gap: 20px;
		column-gap: 20px;
	`,
};
