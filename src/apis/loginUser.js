import axios from "axios";

const loginUser = async (credentials) => {
  return await axios.post("http://localhost:4000/login", credentials);
};
export default loginUser;
