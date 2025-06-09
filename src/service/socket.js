import io from 'socket.io-client';

const socketUrl = import.meta.env.VUE_APP_WS_URL || 'http://localhost:3000';
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const socket = io(socketUrl, {
    autoConnect: true,
    credentials: true,
    transports: ["websocket", "polling"],
    auth: {
        token: token,
        userId: userId,
    },
});

socket.on('connect', () => {
    console.log('WebSocket connected');
});

socket.on('disconnect', (reason) => {
    console.log('WebSocket disconnected:', reason);
});

socket.on('connect_error', (error) => {
    console.error('WebSocket connection error:', error);
});

socket.on('error', (error) => {
    console.error('WebSocket error:', error);
});

export { socket };
