import * as Hapi from '@hapi/hapi';
import Controllers from '../controllers/index';

const routes: Hapi.ServerRoute[] = [
  {
    method: 'GET',
    path: '/first',
    handler: Controllers.first,
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
