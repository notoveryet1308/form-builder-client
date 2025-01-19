import { ErrorResponse } from "..";

export interface RegisterUserResponseType {
  success: boolean;
  statusCode: number;
  data: {
    id: number;
  };
}

export interface LoginUserResponseType {
  success: boolean;
  statusCode: number;
  data: {
    token: string;
    me: {
      id: number;
      email: string;
      password: string;
      lastName?: string;
      firstName: string;
      createdAt: string;
      updatedAt: string;
      avatar: string | null;
      emailVerified: boolean;
      phoneVerified: boolean;
      deletedAt: string | null;
      twoFactorEnabled: boolean;
      phoneNumber: string | null;
      dateOfBirth: string | null;
      lastLoginAt: string | null;
      failedLoginAttempts: number;
    };
  };
}

export interface ServerErrorResponseType {
  success: boolean;
  statusCode: number;
  error: ErrorResponse;
}
