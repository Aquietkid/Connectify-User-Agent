import api from "../axiosConfig";

export async function sendFriendRequest(body) {
  const res = await api.post(`/friend-request/send`, body);
  return res;
}
