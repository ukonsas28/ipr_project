import * as Hapi from '@hapi/hapi';

const routes: Hapi.ServerRoute[] = [
  {
    method: 'GET',
    path: '/1',
    handler: (request, h) => {
      return 'First route';
    },
    options: {
      tags: ['api'],
      description: 'First route',
    },
  },
  {
    method: 'GET',
    path: '/2',
    handler: (request, h) => {
      return 'Second route';
    },
    options: {
      tags: ['api'],
      description: 'Second route',
    },
  },
];

export default routes;
