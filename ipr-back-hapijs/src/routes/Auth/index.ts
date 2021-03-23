import * as Hapi from '@hapi/hapi';
import { loginUserValidate } from '../../types/Auth';
import AuthControllers from '../../controllers/Auth';

const authRoutes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/auth',
    handler: AuthControllers.login,
    options: {
      tags: ['api', 'user', 'login'],
      description: 'Login in app',
      validate: {
        payload: <object>loginUserValidate,
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success request',
            },
            400: {
              description: 'Fail request',
            },
          },
        },
      },
    },
  },
];

export default authRoutes;
