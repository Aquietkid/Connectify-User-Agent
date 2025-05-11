import api from "../axiosConfig";

export async function getAllChats() {
  const res = await api.get(`/chat/`);
  return res;
}

export async function createPersonalChat(body) {
  const res = await api.post(`/chat/personal`, body);
  return res;
}
