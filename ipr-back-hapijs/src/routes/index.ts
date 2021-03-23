import * as Hapi from '@hapi/hapi';
import userRoutes from './User';
import authRoutes from './Auth';

const routes: Hapi.ServerRoute[] = [...userRoutes, ...authRoutes];

export default routes;
