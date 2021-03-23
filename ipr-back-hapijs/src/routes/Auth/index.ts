import * as Hapi from '@hapi/hapi';
import { authUserValidate } from '../../types/Auth';
import AuthControllers from '../../controllers/Auth';

const authRoutes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/auth',
    handler: AuthControllers.auth,
    options: {
      tags: ['api', 'user', 'auth'],
      description: 'Auth in app',
      validate: {
        payload: <object>authUserValidate,
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
