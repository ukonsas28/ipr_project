import { getRepository } from 'typeorm';
import { constants as StatusCodes } from 'http2';
import AppErrors from '../../../errors';
import User from '../../database/entity/User';
import { hashPassword } from '../../../helpers';

class UserRepository {
  static async createUser(request: any): Promise<any> {
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

  static async getUsersList(request: any): Promise<any> {
    const {
      auth: { credentials },
    } = request;

    const userRepo = getRepository(User);

    const usersList = await userRepo.find();

    if (!usersList) {
      throw new AppErrors(
        'Не удалось получить список пользователей',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }
    return {
      data: usersList,
      totalCount: usersList.length,
    };
  }

  static async getUserById(request: any): Promise<any> {
    const {
      params: { id },
    } = request;
    const userRepo = getRepository(User);

    const user = await userRepo.findOne({ where: { id } });

    if (!user) {
      throw new AppErrors(
        'Не удалось получить пользователя',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }
    return user;
  }

  static async updateUserById(request: any): Promise<any> {
    const {
      params: { id },
      payload,
    } = request;
    const userRepo = getRepository(User);

    const user = await userRepo.save({ id, ...payload });

    if (!user) {
      throw new AppErrors(
        'Не удалось обновить информацию о пользователе',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }
    return user;
  }

  static async deleteUserById(request: any): Promise<any> {
    const {
      params: { id },
    } = request;
    const userRepo = getRepository(User);

    const user = await userRepo.delete({ id });

    if (!user.affected) {
      throw new AppErrors(
        'Не удалось удалить информацию о пользователе',
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
      );
    }
    return { status: 'success' };
  }
}

export default UserRepository;
