import axios from "axios";
import { backendUrl } from "../Constants/Data";

// const url = "http://localhost:8000";

export const AddUser = async (data) => {
  let add = await axios.post(`${backendUrl}/add`, data);
  console.log("add", add);
};

export const getusers = async () => {
  let response = await axios.get(`${backendUrl}/users`);
  console.log("get", response);
  return response;
};
