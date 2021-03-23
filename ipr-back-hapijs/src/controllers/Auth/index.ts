import AuthRepository from '../../models/repository/Auth';
import { TryCatchDecorator } from '../../decorators';

class UserControllers {
  @TryCatchDecorator
  static async login(request: any): Promise<any> {
    const response = await AuthRepository.login(request);
    return response;
  }
}

export default UserControllers;
