import * as Hapi from '@hapi/hapi';
import {
  getUserPermissionValidate,
  loginUserValidate,
  logoutUserValidate,
  registrationUserValidate,
} from '../../types/Auth';
import AuthControllers from '../../controllers/Auth';

const authRoutes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: AuthControllers.login,
    options: {
      tags: ['api', 'auth'],
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
  {
    method: 'POST',
    path: '/auth/registration',
    handler: AuthControllers.registration,
    options: {
      tags: ['api', 'auth'],
      description: 'Registration new user in app',
      validate: {
        payload: <object>registrationUserValidate,
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
  {
    method: 'POST',
    path: '/auth/logout',
    handler: AuthControllers.logout,
    options: {
      tags: ['api', 'auth'],
      description: 'Logout the app',
      validate: {
        payload: <object>logoutUserValidate,
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
  {
    method: 'POST',
    path: '/auth/user-permission',
    handler: AuthControllers.getUserPermission,
    options: {
      tags: ['api', 'auth'],
      description: 'Get user permission',
      validate: {
        payload: <object>getUserPermissionValidate,
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
