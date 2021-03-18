import * as Hapi from '@hapi/hapi';
import {
  createUserValidate,
  getUserByIdValidate,
  updateUserValidate,
} from '../../types/User';
import UserControllers from '../../controllers/User/index';

const userRoutes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/user',
    handler: UserControllers.createUser,
    options: {
      tags: ['api', 'user'],
      description: 'Create new user',
      validate: {
        payload: <object>createUserValidate,
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
    method: 'GET',
    path: '/user/user-list',
    handler: UserControllers.getUsersList,
    options: {
      tags: ['api', 'user'],
      description: 'Get users list',
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
    method: 'GET',
    path: '/user/{id}',
    handler: UserControllers.getUsersById,
    options: {
      tags: ['api', 'user'],
      description: 'Get user by id',
      validate: {
        params: <object>getUserByIdValidate,
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
    method: 'PUT',
    path: '/user/{id}',
    handler: UserControllers.updateUsersById,
    options: {
      tags: ['api', 'user'],
      description: 'Update user by id',
      validate: {
        params: <object>getUserByIdValidate,
        payload: <object>updateUserValidate,
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

export default userRoutes;
