import { flexAllCenter } from "Styles/common";
import styled, { css } from "styled-components";

const variantCSS = {
    primary: css`
        background-color: ${({ theme }) => theme.color.white};
        ${flexAllCenter};
        cursor: pointer;
        box-sizing: border-box;
        outline: none;
    `,
};

const shapeCSS = {
    default: css``,
    shape1: css`
        border-radius: 10px;
        border: 2px solid ${({ theme }) => theme.color.primary};
    `,
    shape2: css`
        border: 2px solid ${({ theme }) => theme.color.subLightGreen};
    `,
    moreBtn: css`
        border-radius: 500px;
        border: 1.5px solid rgb(197, 200, 206);
    `,
    round: css`
        border-radius: 50%;
    `,
};

const sizeCSS = {

    // more 버튼
    size1: css`
        width: 188px;
        max-width: 200px;   // 수정 필요
        height: 58px;
        padding: 17px;
        font-size: ${({ theme }) => theme.fontSize.base};
        font-weight: ${({ theme }) => theme.fontWeight.regular};
    `,

    small: css`
        width: 40px;
        max-width: 60px;
        height: 40px;
        padding: 16px 0;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 9;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
};

export const ButtonA = styled.button`
    ${({ variant }) => variantCSS[variant]}
    ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
    border: none;
    :hover {
        opacity: 0.8;
    }
`;