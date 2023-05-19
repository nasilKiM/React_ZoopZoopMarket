import styled, { css } from 'styled-components';
// input 타입 지정해주는 곳
const variantCSS = {
	// 밑줄만 있는 인풋
	primaryBottom: css`
		border: none;
		border-bottom: 2px solid ${({ theme }) => theme.color.gray[200]};
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
		color: ${({ theme }) => theme.color.success};
	`,
	error: css`
		color: ${({ theme }) => theme.color.error};
	`,
	default: css`
		color: ${({ theme }) => theme.color.fontColor[300]};
	`,
};

export const Input = styled.input`
	width: 100%;
	padding: 15px;
	background: none;
	outline: none;
	color: ${({ theme }) => theme.color.gray[200]};
	font-size: ${({ theme }) => theme.fontSize.base};
	border: 2px solid ${({ theme }) => theme.color.gray[100]};
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ status }) => statusCSS[status]}
    :focus {
		border: 2px solid ${({ theme }) => theme.color.primary[300]};
	}
	:disabled {
		color: ${({ theme }) => theme.color.gray[200]};
		opacity: 0.8;
	}
	cursor: pointer;
`;
