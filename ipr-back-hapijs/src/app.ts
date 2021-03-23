import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import AuthBearer from 'hapi-auth-bearer-token';
import HapiSwagger from 'hapi-swagger';
import { Connection, createConnection } from 'typeorm';
import appRoutes from './routes';
import 'reflect-metadata';
import AuthControllers from './controllers/Auth';
import { authStrategy } from './helpers';

class App {
  private server: Hapi.Server;

  private dbConnection: Connection;

  private async initDB() {
    this.dbConnection = await createConnection();
    await this.dbConnection.runMigrations();
  }

  private async addPlugins() {
    await this.server.register([
      Inert,
      Vision,
      AuthBearer,
      {
        plugin: HapiSwagger,
        options: <HapiSwagger.RegisterOptions>{
          info: {
            title: 'API Documentation',
            description: 'API Documentation',
          },
          jsonPath: '/documentation.json',
          documentationPath: '/documentation',
          schemes: ['http', 'https'],
          debug: true,
          securityDefinitions: {
            Bearer: {
              type: 'apiKey',
              name: 'Authorization',
              description: 'Bearer token',
              in: 'header',
            },
          },
          security: [{ Bearer: [] }],
        },
      },
    ]);
  }

  private async initServer() {
    this.server = Hapi.server({
      port: 8888,
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    });
    await this.addPlugins();
    await this.initDB();
    this.server.auth.strategy(authStrategy.TOKEN, 'bearer-access-token', {
      allowQueryToken: false,
      validate: AuthControllers.auth,
    });
    this.server.route(appRoutes);
  }

  public async startServer() {
    try {
      await this.initServer();
      await this.server.start();
      console.log(
        'Server running on %s://%s:%s',
        this.server.info.protocol,
        this.server.info.address,
        this.server.info.port
      );
      console.log(
        'Documentation running on %s://%s:%s/documentation',
        this.server.info.protocol,
        this.server.info.address,
        this.server.info.port
      );
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
}

export default new App();
