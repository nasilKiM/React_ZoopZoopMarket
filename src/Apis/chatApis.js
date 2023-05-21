import { Axios } from './@core';

const PATH = '/api/chat';

const ChatApis = {
	setChatRoom(prod_idx) {
		return Axios.post(PATH, { prod_idx });
	},
	readChatMsg(room_idx) {
		return Axios.post(PATH + '/readall', null, {
			params: {
				room_idx,
			},
		});
	},
	saveMsg({ room_idx, message }) {
		return Axios.post(PATH + '/send', { room_idx, message });
	},
	loadChatLog(room_idx) {
		return Axios.get(PATH + '/chat-log', {
			params: {
				room_idx,
			},
		});
	},
	loadAllChatList(page) {
		return Axios.get(PATH + '/chat-room-list', {
			params: {
				page,
			},
		});
	}, 
	loadSpecificChatRoom(prod_idx) {
		return Axios.get(PATH + '/product-chat-list', {
			params: {
				prod_idx,
			},
		});
	},
};

export default ChatApis;
