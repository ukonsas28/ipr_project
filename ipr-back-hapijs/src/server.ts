import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';

const swaggerOptions = {
  info: {
    title: 'API Documentation',
    description: 'API Documentation',
  },
  jsonPath: '/documentation.json',
  documentationPath: '/documentation',
  schemes: ['http', 'https'],
  debug: true,
};

const init = async () => {
  const server = Hapi.server({
    port: 8888,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',

    options: {
      handler: (request, h) => {
        console.log('hi');
        return 'Hello World!!!back';
      },
      tags: ['api'],
      description: 'ЕЕ работает)',
    },
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  await server.start();
  console.log(
    'Server running on %s://%s:%s',
    server.info.protocol,
    server.info.address,
    server.info.port
  );
  console.log(
    'Documentation running on %s://%s:%s/documentation',
    server.info.protocol,
    server.info.address,
    server.info.port
  );
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
