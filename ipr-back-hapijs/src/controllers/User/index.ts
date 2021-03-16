import UserRepository from '../../models/repository/User';

class UserControllers {
  static async createUser(request: any) {
    try {
      console.log(request.payload);
      // const response = await UserRepository.createUser();
      // return response;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default UserControllers;
