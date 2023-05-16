import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SucessResponse, ErrorResponse } from "../utility/response";
export class UserService {
  constructor() {}
  // User creation, validation & login
  async CreateUser(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from create User" });
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from User Login" });
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Verify User" });
  }

  // User profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Create Profile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Get Profile" });
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Edit Profile" });
  }

  //Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Create Cart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Get Cart" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Update Cart" });
  }

  // Payment Section
  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response form Create Payment Method" });
  }
  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response form Get Payment Method" });
  }
  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response form Update Payment Method" });
  }
}
