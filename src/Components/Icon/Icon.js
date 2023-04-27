import styled from 'styled-components';

const MannerMeter = () => {
	const score = Math.floor(Math.random() * 100);
	return (
		<S.Wrapper>
			<div>{score}점</div>
			<span></span>
		</S.Wrapper>
	);
};

export default MannerMeter;

const Wrapper = styled.div`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
`;

const S = {
	Wrapper,
};
