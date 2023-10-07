import axios from "axios";
import { backendUrl } from "../Constants/Data";

// const url = "http://localhost:8000";
const backendUrl = "https://rizchatbackend.onrender.com";

export const AddUser = async (data) => {
  let add = await axios.post(`${url}/add`, data);
  console.log("add", add);
};

export const getusers = async () => {
  let response = await axios.get(`${url}/users`);
  console.log("get", response);
  return response;
};
