import { UserModel } from "../models/UserModel";

export class UserRepository {
  constructor() {}
  async createAccount({ email, password, salt, phone, userType }: UserModel) {}
}
