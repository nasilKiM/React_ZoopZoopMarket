import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TopBtn = () => {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Wrap onClick={handleClick}>
			<div>
				<FontAwesomeIcon icon={faAngleUp} />
			</div>
			<div>Top</div>
		</Wrap>
	);
};
export default TopBtn;

const Wrap = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
<<<<<<< HEAD
	width: 40px;
	height: 40px;
=======
>>>>>>> 46c164c49444ebbdfb65b617b5de029984f9bfd2
	justify-content: center;
	color: #000;
	border-radius: 50%;
	cursor: pointer;
	position: fixed;
	right: 35px;
	bottom: 90px;
`;
