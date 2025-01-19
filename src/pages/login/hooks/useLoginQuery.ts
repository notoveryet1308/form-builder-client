import { loginUser } from "@/api/auth";
import { LoginUserPayloadType } from "@/schema/auth";
import {
  LoginUserResponseType,
  ServerErrorResponseType,
} from "@/types/response/auth";
import { useMutation } from "react-query";

interface LoginMutationOptions {
  onSuccess?: () => void;
  variables: LoginUserPayloadType;
  onError?: (error: ServerErrorResponseType) => void;
}

const useLoginQuery = () => {
  const mutation = useMutation<
    LoginUserResponseType,
    ServerErrorResponseType,
    LoginUserPayloadType
  >({
    mutationFn: loginUser,
  });

  const mutate = ({ variables, onError, onSuccess }: LoginMutationOptions) => {
    mutation.mutateAsync(variables, { onError, onSuccess });
  };

  return {
    mutate,
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isLoading,
  };
};

export default useLoginQuery;
