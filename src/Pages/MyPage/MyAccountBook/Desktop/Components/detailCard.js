import styled from "styled-components";

const DetailCard = ({data, year, month}) => {
    return (
      <>
            <S.PreviewWrap>
                <S.Date>
					{year}년 {month}월
				</S.Date>
					{data && 
                    <div>
						<S.Flex>
							<div>당월 수입</div>
							<div>
								<S.Amount>
                                    {data.amount.thisMonthSaleAmount === null
									    ? 0
									    : parseInt(data.amount.thisMonthSaleAmount).toLocaleString(
									    	'ko-KR',
									    )}
								</S.Amount>
								원
							</div>
						</S.Flex>
						<S.Flex>
							<div>당월 지출</div>
							<div>
								<S.Amount>
                                    {data.amount.thisMonthPurchaseAmount === null
										? 0
										: parseInt(data.amount.thisMonthPurchaseAmount).toLocaleString(
														'ko-KR',
										)}
								</S.Amount>
								원
							</div>
						</S.Flex>
                        <S.Flex2>
							<div>당월 수익</div>
							<div><S.Amount>{data.amount.thisMonthSaleAmount - data.amount.thisMonthPurchaseAmount}</S.Amount>원</div>
						</S.Flex2>
					</div>}
				</S.PreviewWrap>
        <S.Wrap>
            <S.DetailTitle>세부내역</S.DetailTitle>

			<div>{data && data.payList.map(item => <PayListCard item={item} />)}</div>
        </S.Wrap>
      </>
    )
};

export default DetailCard;

const Wrap = styled.div`
    width: 80%;
	height: 28vh;
	margin: 0 auto 30px;
    color: ${({theme}) => theme.color.primary[300]};
    font-weight: ${({theme}) => theme.fontWeight.bolder};
`;

const PreviewWrap = styled.div`
	width: 80%;
	height: 28vh;
	margin: 0 auto 30px;
	padding: 30px 20px 20px;
	box-shadow: 0px 0px 20px #e0e0e0;
	& > div:nth-child(1) {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
		font-weight: ${({theme}) => theme.fontWeight.bold};
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
`

const Flex2 = styled.div`
	display: flex;
	margin: 1.3rem auto 1.3rem;
	width: 50%;
	justify-content: space-between;
	border-top: solid 2px ${({theme}) => theme.color.gray[200]};
	padding-top: 1rem;
`

const Amount = styled.span`
	color: ${({theme}) => theme.color.primary[300]};
	font-weight: ${({theme}) => theme.fontWeight.bolder};
`;

const DetailTitle = styled.div`
	margin: 50px 0;
    `;

const Date = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	min-width: min-content;
`;

const S = {
    Wrap,
    PreviewWrap,
    Flex,
    Flex2,
    Amount,
    DetailTitle,
    Date
}