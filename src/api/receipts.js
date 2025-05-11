import axios from './axiosInstance'

export async function getReceiptsForMessage(messageId) {
    try {
        return await axios.get(`/chat/message/${messageId}/receipts`)
    } catch (err) {
        console.error(err)
        return null
    }
}
