import styled from 'styled-components';

const LoadingPage = () => {
	return (
		<S.Container>
			<S.LoadingMessage>
				<S.Spinner />
				Loading...
			</S.LoadingMessage>
		</S.Container>
	);
};
export default LoadingPage;

const Container = styled.div``;

const LoadingMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-size: 24px;
	color: #888;
`;

const Spinner = styled.div`
	border: 4px solid #f3f3f3;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
const S = {
	Container,
	LoadingMessage,
	Spinner,
};
