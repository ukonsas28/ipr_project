import { getRepository } from 'typeorm';
import { constants as StatusCodes } from 'http2';
import AppErrors from '../../../errors';
import User from '../../database/entity/User';
import Sessions from '../../database/entity/Sessions';
import { checkPassword, hashPassword } from '../../../helpers';

class AuthRepository {
  static async auth(request: any, token: any): Promise<any> {
    const userRepo = getRepository(User);
    const sessionsRepo = getRepository(Sessions);

    const session = await sessionsRepo.findOne({
      where: { token },
      relations: ['user'],
    });

    if (!session) {
      return {
        isValid: false,
        credentials: {},
      };
    }

    const user = await userRepo.findOne({ where: { id: session.user.id } });

    if (!user) {
      throw new AppErrors(
        'Не удалось найти пользователя',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }

    return {
      isValid: true,
      credentials: {
        role: 'user',
      },
      artifacts: {
        token,
      },
    };
  }

  static async login(request: any): Promise<any> {
    const {
      payload: { login, password },
    } = request;

    const userRepo = getRepository(User);
    const sessionsRepo = getRepository(Sessions);

    const user: any = await userRepo.findOne({ where: { login } });

    const checkPasswordStatus = await checkPassword(password, user.password);

    if (!checkPasswordStatus) {
      throw new AppErrors(
        'Ошибка авторизации. Не верный пароль',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }
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

  static async registration(request: any): Promise<any> {
    const { payload } = request;

    const hash = await hashPassword(payload.password);
    const userRepo = getRepository(User);

    const user = await userRepo.save({ ...payload, password: hash });

    if (!user) {
      throw new AppErrors(
        'Не удалось создать пользователя',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }

    return user;
  }

  static async logout(request: any): Promise<any> {
    const {
      payload: { token },
    } = request;

    const sessionsRepo = getRepository(Sessions);

    const session = await sessionsRepo.delete({ token });

    if (!session.affected) {
      throw new AppErrors(
        'Не удалось удалить сессию',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }
    return { status: 'success' };
  }
}

export default AuthRepository;
