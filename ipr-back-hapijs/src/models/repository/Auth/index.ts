import { getRepository } from 'typeorm';
import { constants as StatusCodes } from 'http2';
import AppErrors from '../../../errors';
import User from '../../database/entity/User';
import Sessions from '../../database/entity/Sessions';

class AuthRepository {
  static async login(request: any): Promise<any> {
    const {
      payload: { login, password },
    } = request;

    const userRepo = getRepository(User);
    const sessionsRepo = getRepository(Sessions);

    const user: any = await userRepo.findOne({ where: { login, password } });

    if (!user) {
      throw new AppErrors(
        'Не удалось найти пользователя',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }

    const session = await sessionsRepo.save({ user: user.id });

    return {
      login: user.login,
      token: session.token,
    };
  }
}

export default AuthRepository;
