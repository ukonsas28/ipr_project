import AuthRepository from '../../models/repository/Auth';
import { TryCatchDecorator } from '../../decorators';

class AuthControllers {
  @TryCatchDecorator
  static async auth(request: any, token: any): Promise<any> {
    const response = await AuthRepository;
    return response;
  }

  @TryCatchDecorator
  static async login(request: any): Promise<any> {
    const response = await AuthRepository;
    return response;
  }

  @TryCatchDecorator
  static async registration(request: any): Promise<any> {
    const response = await AuthRepository;
    return response;
  }

  @TryCatchDecorator
  static async logout(request: any): Promise<any> {
    const response = await AuthRepository;
    return response;
  }

  @TryCatchDecorator
  static async getUserPermission(request: any): Promise<any> {
    const response = await AuthRepository;
    return response;
  }
}

export default AuthControllers;
