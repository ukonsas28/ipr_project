import bcrypt from 'bcrypt';

export enum AuthStrategy {
  TOKEN = 'token',
}

export const hashPassword = async (password: any) => {
  try {
    const hash = await bcrypt.hash(password, 12);
    return hash;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const checkPassword = async (password: any, passwordHash: any) => {
  try {
    const checkPasswordStatus = await bcrypt.compare(password, passwordHash);
    return checkPasswordStatus;
  } catch (e) {
    throw new Error(e.message);
  }
};
