import AuthRepository from '../../models/repository/Auth';
import { TryCatchDecorator } from '../../decorators';

class AuthControllers {
  @TryCatchDecorator
  static async auth(request: any, token: any): Promise<any> {
    const response = await AuthRepository.auth(request, token);
    return response;
  }

  @TryCatchDecorator
  static async login(request: any): Promise<any> {
    const response = await AuthRepository.login(request);
    return response;
  }

  @TryCatchDecorator
  static async registration(request: any): Promise<any> {
    const response = await AuthRepository.registration(request);
    return response;
  }

  @TryCatchDecorator
  static async logout(request: any): Promise<any> {
    const response = await AuthRepository.logout(request);
    return response;
  }

  @TryCatchDecorator
  static async getUserPermission(request: any): Promise<any> {
    const response = await AuthRepository.getUserPermission(request);
    return response;
  }
}

export default AuthControllers;
