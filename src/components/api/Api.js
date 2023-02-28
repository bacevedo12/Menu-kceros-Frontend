import axios from "axios";
// require("dotenv").config();
export const url_api = "https://menu-kceros-backend-production-54a8.up.railway.app/";

export const getUsers = async() => {
  
  const result = await axios.get(`${url_api}/usuarios`);
  console.log(result);
  return result.data.usuarios;
}

