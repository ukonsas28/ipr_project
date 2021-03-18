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
  static async getUsersById(request: any): Promise<any> {
    const response = await UserRepository.getUsersById(request);
    return response;
  }

  @TryCatchDecorator
  static async updateUsersById(request: any): Promise<any> {
    const response = await UserRepository.updateUsersById(request);
    return response;
  }
}

export default UserControllers;
