import styled from 'styled-components';

const BasicFooter = () => {
	return (
		<S.FooterWrap>
			<S.FooterText>
				<S.Text1>일상의 즐거움을 선사하는</S.Text1>
				<S.Logo src="/Assets/web_logo_edit4.png"></S.Logo>
				<S.Text3>@Copyright by Team1</S.Text3>
			</S.FooterText>
		</S.FooterWrap>
	);
};

export default BasicFooter;

const FooterWrap = styled.div`
	width: 100%;
	height: 200px;
	background-color: ${({ theme }) => theme.color.primary[200]};
	padding-top: 30px;
	font-family: 'Nanum_extraBold';
	position: absolute;
	margin-top: 100px;
`;

const FooterText = styled.div`
	margin-left: 300px;
	line-height: 2.5rem;
	@media (max-width: 800px) {
		margin-left: 100px;
	}
	@media (max-width: 600px) {
		margin-left: 30px;
		line-height: 2rem;
	}
`;

const Text1 = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	padding-bottom: 10px;
`;

const Logo = styled.img`
	max-width: 250px;
	@media (max-width: 800px) {
		width: 200px;
	}
`;

const Text3 = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
`;

const S = {
	FooterWrap,
	FooterText,
	Text1,
	Logo,
	Text3,
};
