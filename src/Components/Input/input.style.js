import styled, { css } from 'styled-components';
// input 타입 지정해주는 곳
const variantCSS = {
	// 밑줄만 있는 인풋
	primaryBottom: css`
		border: none;
		border-bottom: 2px solid ${({ theme }) => theme.PALETTE.gray[200]};
	`,
};

// border-radius
const shapeCSS = {
	default: css``,
	littleShape: css`
		border-radius: 5px;
	`,
	shape: css`
		border-radius: 8px;
	`,
};

const statusCSS = {
	success: css`
		color: ${({ theme }) => theme.PALETTE.success};
	`,
	error: css`
		color: ${({ theme }) => theme.PALETTE.error};
	`,
	default: css`
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	`,
};

export const Input = styled.input`
	width: 100%;
	padding: 7px;
	background: none;
	outline: none;
	font-size: ${({ theme }) => theme.FONT_SIZE.base};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ status }) => statusCSS[status]}
    :focus {
		/* border-color: ${({ theme }) => theme.PALETTE.primary[300]}; */
		border: 2px solid ${({ theme }) => theme.PALETTE.primary[300]};
	}
	:disabled {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		opacity: 0.8;
	}
	cursor: pointer;
`;
