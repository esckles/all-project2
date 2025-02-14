import axios from "axios";

const url: any = "http://localhost:3000/api";

export const RegisterAccount = async (data: {}) => {
  return await axios.post(`${url}/create-user`, data).then((res) => {
    return res?.data;
  });
};

export const LoginAccount = async (data: {}) => {
  return await axios.post(`${url}/login-user`, data).then((res) => {
    return res?.data;
  });
};
