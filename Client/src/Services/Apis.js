import axios from "axios";

const url = "http://localhost:8000/";
export const AddUser = async (data) => {
  await axios.post(url, data);
};
