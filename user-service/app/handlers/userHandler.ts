import { UserService } from "app/service/userService";
import { ErrorResponse } from "app/utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";

const service = new UserService();

export const Signup = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return service.CreateUser(event);
};

export const Login = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return service.UserLogin(event);
};

export const Verify = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return service.VerifyUser(event);
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method;
  if (httpMethod === "post") {
    return service.CreateProfile(event);
  } else if (httpMethod === "put") {
    return service.EditProfile(event);
  } else if (httpMethod === "get") {
    return service.GetProfile(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method;
  if (httpMethod === "post") {
    return service.CreateProfile(event);
  } else if (httpMethod === "put") {
    return service.EditProfile(event);
  } else if (httpMethod === "get") {
    return service.GetProfile(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return service.CreateUser(event);
};
