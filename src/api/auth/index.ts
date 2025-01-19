import { LoginUserPayloadType, RegisterUserPayloadType } from "@/schema/auth";
import {
  RegisterUserResponseType,
  LoginUserResponseType,
} from "@/types/response/auth";
import { requestServer } from "@/utils/network";

const AUTH_ENDPOINT = {
  LOGIN: "/api/login",
  REGISTER: "/api/register",
};

export const registerUser = async (payload: RegisterUserPayloadType) => {
  const response = await requestServer<
    RegisterUserPayloadType,
    RegisterUserResponseType
  >({
    method: "POST",
    url: AUTH_ENDPOINT.REGISTER,
    data: payload,
  });
  console.log({ response });
  return response;
};

export const loginUser = async (payload: LoginUserPayloadType) => {
  const response = await requestServer<
    LoginUserPayloadType,
    LoginUserResponseType
  >({
    method: "POST",
    url: AUTH_ENDPOINT.LOGIN,
    data: payload,
  });
  console.log({ response });

  return response;
};
