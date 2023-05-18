import styled from 'styled-components';
import CustomButton from '../button';

const EditBtns = () => {
	return (
		<S.Wrap>
			<CustomButton variant={'primary'} shape={'shape2'}>수정</CustomButton>
			<CustomButton variant={'primary'} shape={'shape2'}>삭제</CustomButton>
		</S.Wrap>
	);
};
export default EditBtns;

const Wrap = styled.div`
	& > * {
		background-color: ${({ theme }) => theme.color.white};
		margin-right: 5px;
		border-radius: 5px;
		cursor: pointer;
	}
`;

const S = {
	Wrap,
};
