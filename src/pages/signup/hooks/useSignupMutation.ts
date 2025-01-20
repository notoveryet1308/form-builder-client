import { registerUser } from "@/api/auth";
import { RegisterUserPayloadType } from "@/schema/auth";
import {
  ServerErrorResponseType,
  RegisterUserResponseType,
} from "@/types/response/auth";

import { useMutation } from "react-query";

interface SignupMutationOptions {
  onSuccess?: () => void;
  onError?: (error: ServerErrorResponseType) => void;
  variables: RegisterUserPayloadType;
}

const useSignupMutation = () => {
  const mutation = useMutation<
    RegisterUserResponseType,
    ServerErrorResponseType,
    RegisterUserPayloadType
  >({
    mutationFn: registerUser,
  });

  const mutate = ({ variables, onSuccess, onError }: SignupMutationOptions) => {
    mutation.mutate(variables, {
      onSuccess,
      onError: (error: ServerErrorResponseType) => {
        onError?.(error);
      },
    });
  };

  return {
    mutate,
    error: mutation.error,
    errorMessage: mutation.error?.error,
    success: mutation.isSuccess,
    isLoading: mutation.isLoading,
  } as const;
};

export type SignupMutationResult = ReturnType<typeof useSignupMutation>;
export default useSignupMutation;
