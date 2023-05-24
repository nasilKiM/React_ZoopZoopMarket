import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socketContext = createContext();
export const useSocket = () => useContext(socketContext);

const SocketProvider = ({ children }) => {
	const [socket, setSocket] = useState();

	useEffect(() => {
		setSocket(io(process.env.REACT_APP_BACKEND_URL));
	}, []);

	return (
		<socketContext.Provider value={(socket, setSocket)}>
			{children}
		</socketContext.Provider>
	);
};

export default SocketProvider;
