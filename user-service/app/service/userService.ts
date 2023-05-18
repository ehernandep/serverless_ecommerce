import { UserRepository } from "../repository/userRepository";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SucessResponse, ErrorResponse } from "../utility/response";
import { autoInjectable } from "tsyringe";
import { SignupInput } from "../models/dto/SignUpInput";
import { plainToClass } from "class-transformer";
import { AppValidationError } from "../utility/errors";
import { GetHashedPassword, GetSalt } from "../utility/password";
@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }
  // User creation, validation & login
  async CreateUser(event: APIGatewayProxyEventV2) {
    const input = plainToClass(SignupInput, event.body);
    const error = await AppValidationError(input);
    if (error) {
      return ErrorResponse(404, error);
    }
    const salt = await GetSalt();
    const hashedPassword = await GetHashedPassword();
    const data = await this.repository.createAccount({
      email: input.email,
      password: hashedPassword,
      phone: input.phone,
      userType: "BUYER",
      salt: salt,
    });
    return SucessResponse(input);
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
