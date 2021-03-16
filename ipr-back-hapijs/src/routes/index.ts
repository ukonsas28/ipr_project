import * as Hapi from '@hapi/hapi';
import userRoutes from './User';

const routes: Hapi.ServerRoute[] = [...userRoutes];

export default routes;
