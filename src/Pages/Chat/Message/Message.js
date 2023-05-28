import UserApi from 'Apis/userApi';
import { useEffect, useRef, useState } from 'react';
import MyMessage from './Components/MyChat';
import YourMessage from './Components/YourChat';
import DateDivide from './Components/DateDevide';

const MessageDetail = ({ chat, eventCheck, setEventCheck }) => {
	console.log(chat);
	const scrollRef = useRef();
	const [myNick, setMyNick] = useState();

	console.log(myNick);
	useEffect(() => {
		const myInfo = async () => {
			try {
				const res = await UserApi.userInfo();
				console.log(5555555555555, res);
				setMyNick(res.data.nick_name);
			} catch (err) {
				console.log(res);
			}
		};
		myInfo();
	}, []);
	console.log(eventCheck);
	useEffect(() => {
		console.log(7877777775000);
		scrollRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	}, [eventCheck]);

	useEffect(() => {
		setTimeout(() => {
			scrollRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			});
		}, 100);
	}, []);
	return (
		<div>
			<div>
				{chat?.map((msg, idx) => {
					let isDate = false;
					const created = new Date(chat[idx].createdAt);
					if (idx !== chat.length - 1) {
						const nextCreated = new Date(chat[idx + 1].createdAt);
						created.toLocaleDateString() === nextCreated.toLocaleDateString()
							? isDate
							: (isDate = true);
					}
					return (
						<>
							<DateDivide isDate={isDate} created={created} idx={idx} />
							{msg.User.nick_name === myNick ? (
								<MyMessage msg={msg} />
							) : (
								<YourMessage msg={msg} />
							)}
						</>
					);
				})}
			</div>
			<div ref={scrollRef}></div>
		</div>
	);
};

export default MessageDetail;
