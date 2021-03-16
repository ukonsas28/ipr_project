import * as Hapi from '@hapi/hapi';
import UserControllers from '../../controllers/User/index';

const userRoutes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/user',
    handler: UserControllers.createUser,
    options: {
      tags: ['api', 'user'],
      description: 'Create new user',
    },
  },
  //   {
  //     method: 'GET',
  //     path: '/first',
  //     handler: UserControllers,
  //     options: {
  //       tags: ['api'],
  //       description: 'First route',
  //     },
  //   },
];

export default userRoutes;
