import * as Joi from 'typesafe-joi';

export const loginUserValidate = Joi.object()
  .keys({
    login: Joi.string().required().example('user1@mail.ru'),
    password: Joi.string().required().example('12345'),
  })
  .required();
