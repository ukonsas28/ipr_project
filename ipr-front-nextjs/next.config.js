const dotenv = require('dotenv');

module.exports = {
  env: dotenv.config({
    path: `./env/.env.${process.env.NEXT_ENV_NAME}`,
  }),
};
