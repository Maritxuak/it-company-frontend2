import http from "../http-common";

export default {
    getChatWithUser(otherUserId) {
        return http.get(`/chats/with/${otherUserId}`);
    },

    getChatMessages(chatId) {
        return http.get(`/chats/messages/${chatId}`);
    },

    createChat(createChatDto) {
        return http.post('/chats', createChatDto);
    },

    sendMessage(createMessageDto) {
        return http.post('/messages', createMessageDto);
    }
}