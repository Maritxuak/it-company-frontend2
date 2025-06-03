import io from 'socket.io-client';

const socket = io(import.meta.env.VUE_APP_WS_URL || 'http://localhost:3000', {
    autoConnect: true,
    credentials: true,
    transports: ["websocket", "polling"],
});

export { socket };