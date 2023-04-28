import styled from 'styled-components';

const CompletedBtn = () => {
	return (
		<S.Wrap>
			<button>판매 완료 변경</button>
		</S.Wrap>
	);
};
export default CompletedBtn;

const Wrap = styled.div`
	& > button {
		border-radius: 5px;
		background-color: ${({ theme }) => theme.color.white};
		border: 2px solid ${({ theme }) => theme.color.primary};
	}
`;

const S = {
	Wrap,
};
