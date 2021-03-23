import UserRepository from '../../models/repository/User';
import { TryCatchDecorator } from '../../decorators';

class UserControllers {
  @TryCatchDecorator
  static async createUser(request: any): Promise<any> {
    const response = await UserRepository.createUser(request);
    return response;
  }

  @TryCatchDecorator
  static async getUsersList(request: any): Promise<any> {
    const response = await UserRepository.getUsersList(request);
    return response;
  }

  @TryCatchDecorator
  static async getUserById(request: any): Promise<any> {
    const response = await UserRepository.getUserById(request);
    return response;
  }

  @TryCatchDecorator
  static async updateUserById(request: any): Promise<any> {
    const response = await UserRepository.updateUserById(request);
    return response;
  }

  @TryCatchDecorator
  static async deleteUserById(request: any): Promise<any> {
    const response = await UserRepository.deleteUserById(request);
    return response;
  }
}

export default UserControllers;
