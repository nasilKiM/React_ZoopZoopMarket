import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import UserApi from 'Apis/userApi';
import { FORM_TYPE } from 'Consts/FormType';
import CustomButton from 'Components/Buttons/button';

const MyPasswordEdit = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = async data => {
		const info = {
			pw: data.password,
			confirmPW: data.confirmPW,
		};

		try {
			await UserApi.userPasswordEdit(info);
			alert('비밀번호가 변경되었습니다.');
			navigate('/mypage');
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	const onClickExit = () => {
		navigate('/mypage/user_edit');
	};

	const full = !errors.password && !errors.confirmPW;

	return (
		<>
			<S.Wrap>
				<S.Text>
					{' '}
					90일마다 비밀번호를 변경하여 소중한 개인정보를 보호하세요!
				</S.Text>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.Grid1>
						<S.Title>* 비밀번호</S.Title>
						<S.Input
							{...register('password', FORM_TYPE.PASSWORD)}
							placeholder="특수문자, 영어, 숫자 포함 8자이상"
							type="password"
						/>
					</S.Grid1>
					{errors.password && <S.Error>{errors.password.message}</S.Error>}
					<S.Grid1>
						<S.Title>* 비밀번호 확인</S.Title>
						<S.Input
							{...register('confirmPW', {
								required: true,
								validate: value => {
									if ('password' !== value) {
										return '비밀번호가 일치하지 않습니다.';
									}
								},
							})}
							placeholder="PW check"
							type="password"
						/>
					</S.Grid1>
					{errors.confirmPW && <S.Error>{errors.confirmPW.message}</S.Error>}
					<S.Button
						type="submit"
						disabled={!full}
						size={'submitBtn'}
						shape={'submitBtn'}
					>
						저장하기
					</S.Button>
				</S.Form>
				<S.Text2 onClick={onClickExit}>취소하기</S.Text2>
			</S.Wrap>
		</>
	);
};

export default MyPasswordEdit;

const Wrap = styled.div`
	width: 100%;
	margin: 0 auto;
	flex-direction: column;
	${flexAllCenter}
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 40px 15vw;
`;

const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
`;

const Button = styled(CustomButton)`
	margin-top: 20px;
	width: 100%;
	background: linear-gradient(
		${({ theme }) => theme.color.primary[400]},
		${({ theme }) => theme.color.primary[200]}
	);
	border: none;
	color: ${({ theme }) => theme.color.fontColor[100]};
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-bottom: 15px;
`;

const Grid1 = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-auto-rows: 5.5vh;
	grid-gap: 20px;
	margin-bottom: 3vh;
`;

const Title = styled.div`
	width: 10vw;
	min-width: max-content;
	${flexAllCenter}
	margin-right: 22px;
`;

const Title2 = styled.div`
	min-width: max-content;
	${flexAllCenter}
`;

const Text = styled.div`
	margin-bottom: 3vh;
	@media ${({ theme }) => theme.device.mobile} {
		font-size: ${({ theme }) => theme.fontSize.es};
	}
`;

const Text2 = styled.div`
	margin-top: 30px;
	font-size: ${({ theme }) => theme.fontSize.base};
	color: ${({ theme }) => theme.color.primary[300]};
	:hover {
		color: ${({ theme }) => theme.color.primary[500]};
		cursor: pointer;
	}
`;

const S = {
	Wrap,
	Form,
	Input,
	Button,
	Error,
	Grid1,
	Title,
	Title2,
	Text,
	Text2,
};
