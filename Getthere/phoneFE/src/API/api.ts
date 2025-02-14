import { AsyncResource } from "async_hooks";
import axios from "axios";

const url: any = "http://localhost:2323/api";

export const createAccount = async (data: {}) => {
  return await axios.post(`${url}/create-user`, data).then((res) => {
    return res?.data;
  });
};

export const loginAccount = async (data: {}) => {
  return await axios.post(`${url}/login-user`, data).then((res) => {
    return res?.data;
  });
};
