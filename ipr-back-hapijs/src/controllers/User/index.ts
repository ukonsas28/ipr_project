import UserRepository from '../../models/repository/User';
import { TryCatchDecorator } from '../../decorators';

class UserControllers {
  @TryCatchDecorator
  static async createUser(request: any): Promise<any> {
    const response = await UserRepository.createUser(request);
    return response;
  }
}

export default UserControllers;
