import CustomButton from '../button';

import styled from 'styled-components';

const EditBtns = () => {
	return (
		<S.Wrap>
			<CustomButton variant={'primary'} shape={'shape2'}>
				수정
			</CustomButton>
			<CustomButton variant={'primary'} shape={'shape2'}>
				삭제
			</CustomButton>
		</S.Wrap>
	);
};
export default EditBtns;

const Wrap = styled.div`
	display: flex;
	padding: 5px 0;
	& > * {
		background-color: ${({ theme }) => theme.color.white};
		margin-right: 5px;
		border-radius: 5px;
		padding: 5.5px 15px;
		cursor: pointer;
		:hover {
			background-color: ${({ theme }) => theme.color.primary[300]};
		}
	}
`;

const S = {
	Wrap,
};
