import { BASE_URL } from "@/constants";
import { RegisterUserPayloadType } from "@/schema/auth";
import { RegisterUserResponse } from "@/types/response/auth";
import { requestServer } from "@/utils/network";

const AUTH_ENDPOINT = {
  LOGIN: BASE_URL + "/api/login",
  REGISTER: BASE_URL + "/api/register",
};

export const registerUser = async (payload: RegisterUserPayloadType) => {
  try {
    const response = await requestServer<
      RegisterUserPayloadType,
      RegisterUserResponse
    >({
      method: "POST",
      url: AUTH_ENDPOINT.REGISTER,
      data: payload,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
