/**
 * register user response
 * "success": true,
    "statusCode": 201,
    "data": {
        "id": 2
    }
 */

export interface RegisterUserResponse {
  success: boolean;
  statusCode: number;
  data: {
    id: number;
  };
}
