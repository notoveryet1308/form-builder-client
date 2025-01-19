import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BASE_URL } from "../constants";
import { log } from "console";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiRequest<T> {
  method: HttpMethod;
  url: string;
  data?: T;
  accessToken?: string;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
}

interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const requestServer = async <TRequest, TResponse>({
  method,
  url,
  data,
  accessToken,
}: ApiRequest<TRequest>): Promise<TResponse> => {
  if (accessToken) {
    instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  try {
    const response: AxiosResponse<ApiResponse<TResponse>> = await instance({
      method,
      url,
      data,
    });
    console.log({ response }, "requestServer");
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw axiosError.response?.data;
  }
};
