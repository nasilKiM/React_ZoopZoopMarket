import styled from 'styled-components';
import UploadFiles from './Components/uploadFiles';
import TextArea from './Components/textArea';
import { useForm } from 'react-hook-form';
import FindAddress from 'Components/Address/address';

const MobileRegisterPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<S.Wrapper onSubmit={handleSubmit(data => console.log(data))}>
			<FindAddress />
			<UploadFiles />
			<S.Blank></S.Blank>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>제목</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="최대 20자까지 입력 가능합니다."
						maxLength={19}
						{...register('title', {
							required: '제목은 필수 사항입니다.',
						})}
					></S.InputBox>
					{errors.title && <Error role="alert">{errors.title.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>가격</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="0원 기입시 무료 나눔템으로 분류됩니다."
						{...register('price', {
							required: '가격은 필수 사항입니다.',
							pattern: {
								value: /^[0-9]+$/,
								message: '숫자만 입력해주세요',
							},
						})}
					></S.InputBox>
					{errors.price && <Error role="alert">{errors.price.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>태그</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="#재훈이네 #금쪽이 #이재훈"
						{...register('tag', {
							required: '최소 1개 이상 입력해주세요.',
						})}
					></S.InputBox>
					{errors.tag && <Error role="alert">{errors.tag.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.AddressWrapper>
				<S.AddressTitleContainer>
					<S.Mark>*</S.Mark>
					<S.Title>거래장소</S.Title>
					<S.Address>GS25 S청담역점</S.Address>
					<S.SearchBtn>주소 찾기</S.SearchBtn>
				</S.AddressTitleContainer>
			</S.AddressWrapper>
			<TextArea txt={'본문 내용'} />
			<S.Container>
				<S.RegisterBtn>등록하기</S.RegisterBtn>
			</S.Container>
		</S.Wrapper>
	);
};

export default MobileRegisterPage;

const Wrapper = styled.form`
	margin: 50px 0;
`;

const Blank = styled.div`
	width: 100%;
	height: 20px;
`;

const Container = styled.div`
	width: 700px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
`;

const Line = styled.div`
	width: 700px;
	display: flex;
	align-items: center;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Title = styled.span`
	width: 80px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputContainer = styled.div`
	width: 600px;
	position: relative;
`;

const InputBox = styled.input`
	width: 600px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.subBeige};
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
	:focus {
		outline: none;
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 30px;
	margin-top: 5px;
	position: absolute;
	left: 400px;
	top: 10px;
`;

const AddressWrapper = styled.div`
	width: 700px;
	display: flex;
	flex-direction: column;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const AddressTitleContainer = styled.div`
	width: 680px;
	display: flex;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
`;

const AddressMap = styled.div`
	width: 680px;
	position: relative;
	margin: 0 auto;
`;

const Address = styled.div`
	width: 450px;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
`;

const SearchBtn = styled.button`
	width: 120px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	background: none;
	cursor: pointer;
`;

const RegisterBtn = styled.button`
	width: 340px;
	height: 54px;
	border: none;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.subBeige};
	margin-left: auto;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.white};
	}
`;

const S = {
	Wrapper,
	Blank,
	Container,
	RegisterBtn,
	Line,
	Mark,
	Title,
	InputContainer,
	InputBox,
	Error,
	AddressWrapper,
	AddressTitleContainer,
	Address,
	AddressMap,
	SearchBtn,
};
