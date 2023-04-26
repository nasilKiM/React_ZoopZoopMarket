import styled from "styled-components";


const NewChatNotice = () => {

    return (
        <S.NewChatWrap>
            <S.Message>[상품명]에 대한 새 메시지가 도착했습니다.</S.Message>
            <S.OffBtn>X</S.OffBtn>
        </S.NewChatWrap>
    )
}

export default NewChatNotice;

const NewChatWrap = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(255, 255, 255, 0.5); */ // 배경화면 딤드처리 논의 필요
`

const Message = styled.div`
    width: 340px;
    height: 54px;
    background-color: white;
    border-radius: 2rem;
    border: solid 0.3em red;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};;
`

const OffBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    border: solid 0.2em #d9d9d9;
    position: absolute;
    top: 48%;
    left: 56%;
    z-index: 101;
    font-size: 18px;
    cursor: pointer;
`

const S = {
    NewChatWrap,
    Message,
    OffBtn
}