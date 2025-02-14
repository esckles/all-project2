import axios from "axios";

const URL = "http://localhost:3333/api";

export const RegisterAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/signUp-user`, data).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
export const LoginAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/signIn-user`, data).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
export const ReadOneAccount = async (userID: any) => {
  try {
    await axios.post(`${URL}/ReadOne/${userID}`).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
export const ReadAllAccount = async (userID: any) => {
  try {
    await axios.post(`${URL}/ReadAll/${userID}`).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
