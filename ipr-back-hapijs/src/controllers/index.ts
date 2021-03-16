import UserRepository from '../models/repository/User';

class Controllers {
  static async first() {
    const response = await UserRepository.request();
    return response;
  }
}

export default Controllers;
