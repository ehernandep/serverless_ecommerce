"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userRepository_1 = require("../repository/userRepository");
const response_1 = require("../utility/response");
const tsyringe_1 = require("tsyringe");
const SignUpInput_1 = require("../models/dto/SignUpInput");
const class_transformer_1 = require("class-transformer");
const errors_1 = require("../utility/errors");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    // User creation, validation & login
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = (0, class_transformer_1.plainToClass)(SignUpInput_1.SignupInput, event.body);
            const error = yield (0, errors_1.AppValidationError)(input);
            if (error) {
                return (0, response_1.ErrorResponse)(404, error);
            }
            return (0, response_1.SucessResponse)(input);
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from User Login" });
        });
    }
    VerifyUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Verify User" });
        });
    }
    // User profile
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Create Profile" });
        });
    }
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Get Profile" });
        });
    }
    EditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Edit Profile" });
        });
    }
    //Cart Section
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Create Cart" });
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Get Cart" });
        });
    }
    UpdateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Update Cart" });
        });
    }
    // Payment Section
    CreatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response form Create Payment Method" });
        });
    }
    GetPaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response form Get Payment Method" });
        });
    }
    UpdatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response form Update Payment Method" });
        });
    }
};
UserService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map