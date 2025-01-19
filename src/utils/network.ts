import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BASE_URL } from "../constants";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

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
    'Content-Type': 'application/json',
  }
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

  const onSuccess = (response: AxiosResponse<ApiResponse<TResponse>>) => {
    return response.data.data;
  };

  const onError = (error: AxiosError<ApiError>) => {
    const errorResponse = error.response?.data || {
      message: 'An unexpected error occurred',
      status: 500,
    };
    return Promise.reject(new Error(errorResponse.message));
  };

  return instance<ApiResponse<TResponse>>({
    method,
    url,
    data,
  }).then(onSuccess).catch(onError);
};
