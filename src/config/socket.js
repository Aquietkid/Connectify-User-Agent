import { io } from "socket.io-client";
import { SERVER_URL } from "../utils/constants";

const URL = SERVER_URL;
export const socket = io(URL, {
  withCredentials: true,
  transports: ["websocket"],
});

export default socket;