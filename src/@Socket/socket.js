import { io } from 'socket.io-client';

export const socketConnect = () => io(process.env.REACT_APP_BACKEND_URL);
