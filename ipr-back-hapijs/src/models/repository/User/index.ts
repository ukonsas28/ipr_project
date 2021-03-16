import { getRepository } from 'typeorm';
import User from '../../database/entity/User';

class UserRepository {
  static async request() {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne(2);
    console.log(user);
    return user;
  }
}

export default UserRepository;
