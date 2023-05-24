import { flexAllCenter } from 'Styles/common';
import styled, { css } from 'styled-components';

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.color.white};
		${flexAllCenter};
		cursor: pointer;
		box-sizing: border-box;
	`,
};

const shapeCSS = {
	// 검색 페이지에서 [상품 더보기]에 쓰일 예정!
	moreBtn: css`
		border-radius: 500px;
		border: 1.5px solid ${({ theme }) => theme.color.gray[200]};
	`,
	// 회원가입/로그인 등 제출시 쓰일 예정!
	submitBtn: css`
		border-radius: 6px;
		&:disabled {
			background: ${({ theme }) => theme.color.gray[200]};
			color: ${({ theme }) => theme.color.fontColor[100]};
			border: none;
		}
	`,
		checkBtn: css`
		border-radius: 10px;
		&:disabled {
			background: ${({ theme }) => theme.color.gray[200]};
			color: ${({ theme }) => theme.color.fontColor[100]};
			border: none;
		}
	`,

	round: css`
		border-radius: 50%;
	`,
};

const sizeCSS = {
	moreBtn: css`
		width: 188px;
		max-width: 200px;
		height: 58px;
		padding: 17px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	`,
	submitBtn: css`
		width: 400px;
		height: 52px;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	`,
	checkBtn: css`
	width: 6vw;
	height: 5vh;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
`,

	// 수업자료 참고
	small: css`
		width: 40px;
		max-width: 60px;
		height: 40px;
		padding: 16px 0;
		font-size: ${({ theme }) => theme.fontSize.medium};
	`,
	medium: css`
		width: 96px;
		height: 48px;
		padding: 16px 0;
		font-size: ${({ theme }) => theme.fontSize.medium};
	`,
	large: css`
		width: 128px;
		height: 64px;
		padding: 16px 9;
		font-size: ${({ theme }) => theme.fontSize.medium};
	`,
	full: css`
		width: 100%;
		aspect-ratio: 8 / 1;
		font-size: ${({ theme }) => theme.fontSize.medium};
	`,
};

export const PropsBtn = styled.button`
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

