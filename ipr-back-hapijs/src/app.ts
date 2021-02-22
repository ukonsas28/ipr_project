import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import appRoutes from './routes';

class App {
  private server: Hapi.Server;

  private async addPlugins() {
    await this.server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: {
          info: {
            title: 'API Documentation',
            description: 'API Documentation',
          },
          jsonPath: '/documentation.json',
          documentationPath: '/documentation',
          schemes: ['http', 'https'],
          debug: true,
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
    this.server.route(appRoutes);
    await this.addPlugins();
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
