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
	position: relative;
	background-color: ${({ theme }) => theme.color.primary[200]};
	padding-top: 20px;
	font-family: 'Nanum_extraBold';
`;

const FooterText = styled.div`
	margin-left: 300px;
	line-height: 2.5rem;
	@media (max-width: 800px) {
		margin-left: 100px;
	}
`;

const Text1 = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	padding-bottom: 10px;
`;

const Logo = styled.img`
	max-width: 250px;
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
