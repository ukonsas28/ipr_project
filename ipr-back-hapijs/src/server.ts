import Hapi from '@hapi/hapi';

const init = async () => {
  const server = Hapi.server({
    port: 8888,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World! back';
    },
  });
  await server.start();
  console.log(
    'Server running on %s://%s:%s',
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
