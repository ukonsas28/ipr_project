export type TUserData = {
  login: string;
  token: string;
};

export type TGetUserDataParams = {
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
