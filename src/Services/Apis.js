import axios from "axios";

const url = "http://localhost:8000";
export const AddUser = async (data) => {
  let add = await axios.post(`${url}/add`, data);
  console.log("add", add);
};

export const getusers = async () => {
  let response = await axios.get(`${url}/users`);
  console.log("get", response);
  return response;
};
