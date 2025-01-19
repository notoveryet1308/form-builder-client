import axios from "axios";

import { BASE_URL } from "@/constants";

const AUTH_ENDPOINT = {
  LOGIN: BASE_URL + "/api/login",
  REGISTER: BASE_URL + "/api/register",
};

export const registerUser = async (payload) => {
  try {
    const response = await axios.post(AUTH_ENDPOINT.REGISTER, {
      ...payload,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
