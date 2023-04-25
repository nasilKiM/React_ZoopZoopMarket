import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TopBtn = () => {
	return (
		<Wrap>
			<div>
				<FontAwesomeIcon icon={faAngleUp} />
			</div>
			<div>Top</div>
		</Wrap>
	);
};
export default TopBtn;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40px;
	height: 40px;
`;
