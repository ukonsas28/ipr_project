import * as Hapi from '@hapi/hapi';
import {
  createUserValidate,
  getUserByIdValidate,
  updateUserValidate,
  deleteUserValidate,
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
    path: '/user/users-list',
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
    handler: UserControllers.getUserById,
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
    handler: UserControllers.updateUserById,
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
  {
    method: 'DELETE',
    path: '/user/{id}',
    handler: UserControllers.deleteUserById,
    options: {
      tags: ['api', 'user'],
      description: 'Delete user by id',
      validate: {
        params: <object>deleteUserValidate,
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
