import api from "../axiosConfig";

export async function getAllMessages(chatId) {
  const res = await api.get(`/message/${chatId}`);
  return res;
}

export async function sendMessage(formData) {
  const res = await api.post(`/message/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res);
  return res;
}
