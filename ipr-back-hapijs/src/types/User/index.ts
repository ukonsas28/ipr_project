import * as Joi from 'typesafe-joi';

export const createUserValidate = Joi.object()
  .keys({
    firstName: Joi.string().required().example('Alex'),
    lastName: Joi.string().required().example('Shirokov'),
    login: Joi.string().required().example('user1@mail.ru'),
    password: Joi.string().required().example('12345'),
  })
  .required();

export const getUserByIdValidate = Joi.object()
  .keys({
    id: Joi.number().required().example(1),
  })
  .required();

export const updateUserValidate = createUserValidate;
