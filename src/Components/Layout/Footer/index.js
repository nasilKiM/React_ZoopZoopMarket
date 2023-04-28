import styled from "styled-components";

const BasicFooter = () => {
	return (
		<S.FooterWrap>
			<S.FooterText>
				<S.Text1>일상의 즐거움을 선사하는</S.Text1>
				<S.Text2>Zoop</S.Text2>
				<S.Text2>Zoop</S.Text2>
				<S.Text3>@Copyright by Team1</S.Text3>
			</S.FooterText>
		</S.FooterWrap>
	);
};

export default BasicFooter;

const FooterWrap = styled.div`
	width: 100vw;
	height: 200px;
	position: relative;
	transform: translateY(120%); // 페이지마다 하단고정 여부가 달라지는 이슈 발생. 수정 필요 (ex. mypage)
	background-color: #BECAA2;
	padding-top: 30px;
	font-family: 'Nanum_extraBold';
`

const FooterText = styled.div`
	margin-left: 300px;
	line-height: 2.5rem;
`

const Text1 = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
`

const Text2 = styled.div`
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`

const Text3= styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
`

const S = {
	FooterWrap,
	FooterText,
	Text1,
	Text2,
	Text3
}