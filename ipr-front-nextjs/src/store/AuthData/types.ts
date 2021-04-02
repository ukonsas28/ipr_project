export type TAuthData = {
  token: string;
  firstName: string;
  lastName: string;
};

export type TLoginUserParams = {
  login: string;
  password: string;
};

export type TRegistrationUser = {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  repeatPassword: string;
};
