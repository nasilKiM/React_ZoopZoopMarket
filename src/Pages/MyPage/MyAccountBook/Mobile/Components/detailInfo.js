import styled from "styled-components";

const MobileAccountBookDetailInfo = () => {

    return (
        <>
          <S.PreviewWrap>
            <S.PreviewContent>
                <S.Month>1월</S.Month>
                <S.Text>NNN님, <br/>
                    yyyy년 m월에는 이렇게 거래했어요 :)
                </S.Text>
            </S.PreviewContent>
            <S.PreviewContent>
                <S.SummaryContent1>
                    판매 _ 건<br/>
                    구매 _ 건<br/>
                    무료 나눔<br/>
                </S.SummaryContent1>
                <S.SummaryContent2>
                    원<br/>
                    원<br/>
                    건<br/>
                    <div>총 원</div>
                </S.SummaryContent2>
            </S.PreviewContent>
          </S.PreviewWrap>
            <S.MonthButtonsZone>
                <S.MonthButton>3개월</S.MonthButton>
                <S.MonthButton>6개월</S.MonthButton>
                <S.MonthButton>9개월</S.MonthButton>
                <S.MonthButton>12개월</S.MonthButton>
            </S.MonthButtonsZone>
          <S.GraphWrap>
            <S.Graph>라이브러리 그래프</S.Graph>
          </S.GraphWrap>
          <div>카드 컴포넌트</div>
        </>
    )
};

export default MobileAccountBookDetailInfo;

// 거래내역 박스
const PreviewWrap = styled.div`
    width: 100%;
    height: 450px;
    background-color: ${({ theme }) => theme.color.subBeige};
    padding-top: 30px;
    & > div:nth-child(1) {
            border-bottom: dashed 3px white;
            align-items: center;
    }
    & > div:nth-child(2) {
            margin-top: 30px;
            width: 40%;
            height: 250px;
            justify-content: space-between;
    }
`

const PreviewContent= styled.div`
    width: 90%;
    height: 110px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

const Month = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary};
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.color.white};
`

const Text = styled.div`
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 2rem;  
`

const SummaryContent1 = styled.div`
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 3rem;
`

const SummaryContent2 = styled.div`
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 3rem;
    text-align: right;
    & > div {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.color.primary};
    }
`

// 가계부 그래프
const GraphWrap = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 700px;
`

const MonthButtonsZone = styled.div`
    display: flex;
    align-items: right;
    float: right;
    margin: 50px 0 10px;
`

const MonthButton = styled.button`
    width: 65px;
    height: 40px;
    margin-left: 10px;
    border: 2.5px solid #d9d9d9;
  	border-radius: 0.5em;
    background-color: white;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	cursor: pointer;
    :hover {
        color: red;
    }
    font-size: ${({ theme }) => theme.fontSize.sm};
`

const Graph = styled.div`
    margin-top: 110px;
    width: 100%;
    height: 500px;
    background-color: ${({ theme }) => theme.color.subBeige};
`

const S = {
    PreviewWrap,
    PreviewContent,
    Month,
    Text,
    SummaryContent1,
    SummaryContent2,
    GraphWrap,
    MonthButtonsZone,
    MonthButton,
    Graph
}