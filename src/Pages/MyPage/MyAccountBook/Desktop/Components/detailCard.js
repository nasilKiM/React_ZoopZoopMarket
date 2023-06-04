import ItemCard from "Components/Card/Desktop/Card";

import { flexJustifyCenter, gridAllCenter, gridColumn, gridGap } from "Styles/common";
import styled from "styled-components";

const DetailCard = ({data, year, month}) => {
    return (
      <>
        <S.Wrapper>
		      <S.PreviewWrap>
            <S.Date>
					  {year}년 {month}월
				    </S.Date>
              <div>
                <S.Flex>
                  <div>당월 수입</div>
                  <div>
                    {data && <S.Amount>
                                        {data.amount.thisMonthSaleAmount === null
                          ? 0
                          : parseInt(data.amount.thisMonthSaleAmount).toLocaleString(
                            'ko-KR',
                          )}
                    </S.Amount>}
                     원
                  </div>
						</S.Flex>
						<S.Flex>
							<div>당월 지출</div>
							<div>
								{data && <S.Amount>
                                    {data.amount.thisMonthPurchaseAmount === null
										? 0
										: parseInt(data.amount.thisMonthPurchaseAmount).toLocaleString(
														'ko-KR',
										)}
								</S.Amount>}
								 원
							</div>
						</S.Flex>
						<S.Flex2>
							<div>당월 수익</div>
							{data && <div><S.Amount>{parseInt(data.amount.thisMonthSaleAmount - data.amount.thisMonthPurchaseAmount).toLocaleString('ko-KR')}</S.Amount> 원</div>}
						</S.Flex2>
					</div>
				</S.PreviewWrap>
		</S.Wrapper>
		<S.Wrap2>
			<S.DetailTitle>세부내역</S.DetailTitle>
		</S.Wrap2>	
		<S.Container>
			{data && <div>{data.payList.map(item => <ItemCard index={item.idx} products={item.Product} isDone={true}/>)}</div>}
		</S.Container>
      </>
    )
};

export default DetailCard;

const Wrapper = styled.div`
	width: 60%;
	margin: 0 auto;
	@media screen and (max-width: 1000px) {
		width: 80%;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

const Wrap = styled.div`
	width: 80%;
	height: 28vh;
	margin: 0 auto 30px;
	color: ${({ theme }) => theme.color.primary[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const PreviewWrap = styled.div`
	width: 80%;
	height: 28vh;
	margin: 0 auto 30px;
	padding: 30px 20px 20px;
	box-shadow: 0px 0px 20px #e0e0e0;
	& > div:nth-child(1) {
		${flexJustifyCenter}
		margin-bottom: 30px;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	& > div:nth-child(2) {
		margin: 0 auto;
	}
`;

const Flex = styled.div`
	display: flex;
	margin: 1.3rem auto;
	width: 50%;
	justify-content: space-between;
`;

const Flex2 = styled.div`
	display: flex;
	margin: 1.3rem auto 1.3rem;
	width: 50%;
	justify-content: space-between;
	border-top: solid 2px ${({ theme }) => theme.color.gray[200]};
	padding-top: 1rem;
`;

const Amount = styled.span`
	color: ${({ theme }) => theme.color.primary[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const DetailTitle = styled.div`
	margin: 50px 0 10px;
`;

const Date = styled.div`
	min-width: min-content;
`;

const Wrap2 = styled.div`
	margin: 0 auto;
	width: 60%;
	@media ${({ theme }) => theme.device.tablet} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 95%;
	}
`;

const Container = styled.div`
	/* width: 100%;
	${gridColumn(4)}
	${gridAllCenter}
	
	@media ${({ theme }) => theme.device.laptop} {
		${gridColumn(3)}
		${gridGap.laptop}
	}
	@media ${({ theme }) => theme.device.tablet} {
		${gridColumn(3)}
		${gridGap.tablet}
	}
	@media ${({ theme }) => theme.device.mobile} {
		${gridColumn(2)}
		${gridGap.mobile}
	} */
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Txt = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-left: 30px;
`;

const S = {
  Wrapper,
  Wrap,
  PreviewWrap,
  Flex,
  Flex2,
  Amount,
  DetailTitle,
  Date,
  Container,
  Wrap2,
  Txt,
}