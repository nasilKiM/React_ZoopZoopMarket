import styled from "styled-components";

const MobileSideBar = ({xPosition, setXposition, setIsOpen}) => {

    return (
        <S.Container xPosition={xPosition}>
            <S.Wrap>
                <ul>
                    <S.Li>중고거래</S.Li>
                    <S.Li>무료나눔</S.Li>
                    <S.Li>시세조회</S.Li>
                    <S.Li>물품등록</S.Li>
                    <S.Li>나의 채팅</S.Li>
                    <S.Li>마이페이지</S.Li>
                </ul>
            </S.Wrap>
        </S.Container>
    )
}

export default MobileSideBar;

const Container = styled.div`
    width: 200px;
    height: 70vh;
    background-color: ${({ theme }) => theme.color.subBeige};
    position: fixed;
    top: 75px;
    left: 0;
    transform: translateX(${({xPosition}) => (`${xPosition}px`)});
    transition: 0.4s ease;
`
const Wrap = styled.div`
    padding-top: 30px;
    font-size: ${({ theme }) => theme.fontSize.base};
    `
const Li = styled.li`
    margin-left: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.color.primary};
    }
`

const S = {
    Container,
    Wrap,
    Li
}