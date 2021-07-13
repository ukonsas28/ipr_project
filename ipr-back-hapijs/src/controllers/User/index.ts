import UserRepository from '../../models/repository/User';
import { TryCatchDecorator } from '../../decorators';

class UserControllers {
  @TryCatchDecorator
  static async createUser(request: any): Promise<any> {
    const response = await UserRepository;
    return response;
  }

  @TryCatchDecorator
  static async getUsersList(request: any): Promise<any> {
    const response = await UserRepository;
    return response;
  }

  @TryCatchDecorator
  static async getUserById(request: any): Promise<any> {
    const response = await UserRepository;
    return response;
  }

  @TryCatchDecorator
  static async updateUserById(request: any): Promise<any> {
    const response = await UserRepository;
    return response;
  }

  @TryCatchDecorator
  static async deleteUserById(request: any): Promise<any> {
    const response = await UserRepository;
    return response;
  }
}

export default UserControllers;
