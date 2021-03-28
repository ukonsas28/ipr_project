import Cookies from 'universal-cookie';

export const setTokenCookies = (token: any) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  const cookies = new Cookies();
  cookies.set('authToken', token, { path: '/', expires });
};

export const getTokenCookies = () => {
  const cookies = new Cookies();
  return cookies.get('authToken');
};

export const removeTokenCookies = () => {
  const cookies = new Cookies();
  cookies.remove('authToken', { path: '/' });
};
