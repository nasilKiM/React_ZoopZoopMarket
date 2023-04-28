import styled, { keyframes } from 'styled-components';

const MobileLoading = () => {
	return (
		<S.Container>
			<S.LoadingMessage>
				<S.Loading></S.Loading>
			</S.LoadingMessage>
		</S.Container>
	);
};
export default MobileLoading;
const Wrapper = styled.div`
	width: 414px;
	height: 736px;
	margin: 0 auto;
`;
const Container = styled.div`
	top: 0;
	left: 0;
	width: 414px;
	height: 736px;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);
	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
	width: 50px;
	height: 50px;
	border: 4px solid #f3f3f3;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	animation: ${rotateAnimation} 1s linear infinite;
`;

const LoadingMessage = styled.div`
	align-items: center;
	justify-content: center;

	font-size: 24px;
	color: #888;
`;

const S = {
	Wrapper,
	Container,
	Loading,
	LoadingMessage,
};
