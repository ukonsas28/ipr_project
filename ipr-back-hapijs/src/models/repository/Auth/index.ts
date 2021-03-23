import { getRepository } from 'typeorm';
import { constants as StatusCodes } from 'http2';
import AppErrors from '../../../errors';
import User from '../../database/entity/User';

class AuthRepository {
  static async auth(request: any): Promise<any> {
    const { payload } = request;
    console.log(request, '!!!!!!!!!!!!!!!!!!!!!!!!!!');
    const userRepo = getRepository(User);

    // const user = await userRepo.save(payload);

    // if (!user) {
    //   throw new AppErrors(
    //     'Не удалось создать пользователя',
    //     StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
    //   );
    // }
    // return user;
  }
}

export default AuthRepository;
