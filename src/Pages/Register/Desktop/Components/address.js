import KaMap from 'Components/Map/Map';
import styled from 'styled-components';

const Address = ({ txt }) => {
	return (
		<S.Wrapper>
			<S.TextWrapper>
				<S.Mark>*</S.Mark>
				<S.Txt>{txt}</S.Txt>
				<S.AddressTxt>GS25 청담역점</S.AddressTxt>
				<S.Btn>주소 찾기</S.Btn>
			</S.TextWrapper>
			<S.Container>
				<KaMap />
			</S.Container>
		</S.Wrapper>
	);
};

export default Address;

const Wrapper = styled.div`
	width: 700px;
	display: flex;
	flex-direction: column;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 680px;
	position: relative;
	margin: 0 auto;
`;

const TextWrapper = styled.div`
	width: 680px;
	display: flex;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Txt = styled.span`
	width: 80px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const AddressTxt = styled.div`
	width: 450px;
	/* border: 1px solid pink; */
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
`;

const Btn = styled.button`
	width: 120px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	background: none;
	cursor: pointer;
`;

const S = {
	Wrapper,
	Container,
	TextWrapper,
	Mark,
	Txt,
	AddressTxt,
	Btn,
};
