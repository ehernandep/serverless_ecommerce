"use strict";
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
exports.Payment = exports.Cart = exports.Profile = exports.Verify = exports.Login = exports.Signup = void 0;
const userService_1 = require("app/service/userService");
const response_1 = require("app/utility/response");
const service = new userService_1.UserService();
const Signup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event);
    return service.CreateUser(event);
});
exports.Signup = Signup;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event);
    return service.UserLogin(event);
});
exports.Login = Login;
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event);
    return service.VerifyUser(event);
});
exports.Verify = Verify;
const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === "post") {
        return service.CreateProfile(event);
    }
    else if (httpMethod === "put") {
        return service.EditProfile(event);
    }
    else if (httpMethod === "get") {
        return service.GetProfile(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Profile = Profile;
const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === "post") {
        return service.CreateProfile(event);
    }
    else if (httpMethod === "put") {
        return service.EditProfile(event);
    }
    else if (httpMethod === "get") {
        return service.GetProfile(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Cart = Cart;
const Payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event);
    return service.CreateUser(event);
});
exports.Payment = Payment;
//# sourceMappingURL=userHandler.js.map