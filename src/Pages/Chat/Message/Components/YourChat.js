import Profile from 'Components/Profile/Desktop/profile';

import dayjs from 'dayjs';
import styled from 'styled-components';

import { flexAllCenter } from 'Styles/common';

const YourMessage = ({ msg }) => {
	const createdAt = dayjs(msg.createdAt);
	const AMPM = createdAt.hour() >= 12 ? '오후' : '오전';
	return (
		<S.Wrapper>
			<div>
				<Profile userProfileUrl={msg?.User.profile_url} />
			</div>
			<div>{msg.message}</div>
			<div>
				<span>{AMPM}</span>
				<span>
					{createdAt.hour()}:{createdAt.minute()}
				</span>
			</div>
		</S.Wrapper>
	);
};

export default YourMessage;
const Wrapper = styled.div`
	${flexAllCenter}
	justify-content: left;
	margin: 5px 0;
	& > div:first-child {
		width: 45px;
		height: 45px;
	}
	& > div:nth-child(2) {
		word-break: break-all;
		font-size: ${({ theme }) => theme.fontSize.xs};
		background-color: ${({ theme }) => theme.color.primary[100]};
		line-height: 25px;
		margin-left: 5px;
		padding: 7px 15px;
		border-radius: 10px;
	}
	& > div:nth-child(3) {
		margin-left: 5px;
		font-size: ${({ theme }) => theme.fontSize.es};
		& > span {
			margin: 0 1px;
		}
	}
	white-space: pre-wrap;
`;

const S = {
	Wrapper,
};
