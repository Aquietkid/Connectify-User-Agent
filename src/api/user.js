import api from "../axiosConfig";

export async function authenticate() {
  const res = await api.get(`/user/auth`);
  return res;
}

export async function getAllUsers() {
  const res = await api.get(`/user/all`);
  return res;
}

export async function getActiveUsers() {
  const res = await api.get(`/user/active`);
  return res;
}

export async function getUserInfo(userId) {
  const res = await api.get(`/user/${userId}`);
  return res;
}