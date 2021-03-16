import * as Joi from 'typesafe-joi';

export const createUser = Joi.object().keys({
  firstName: Joi.string().required().example('Alex'),
  lastName: Joi.string().required().example('Shirokov'),
  login: Joi.string().required().example('user1@mail.ru'),
  password: Joi.string().required().example('12345'),
});
