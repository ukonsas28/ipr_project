import AuthRepository from '../../models/repository/Auth';
import { TryCatchDecorator } from '../../decorators';

class UserControllers {
  @TryCatchDecorator
  static async auth(request: any): Promise<any> {
    const response = await AuthRepository.auth(request);
    return response;
  }
}

export default UserControllers;
