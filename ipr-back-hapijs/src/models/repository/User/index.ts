import { getRepository } from 'typeorm';
import User from '../../database/entity/User';

class UserRepository {
  static async createUser() {
    const userRepo = getRepository(User);
    // const user = await userRepo.save();
    // console.log(user);
    // return user;
  }
}

export default UserRepository;
