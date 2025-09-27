import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Login
export const getToken = (): string => {
  return cookies.get('@raihasa/token');
};

export const setToken = (token: string) => {
  cookies.set('@raihasa/token', token, { path: '/' });
};

export const removeToken = () => {
  cookies.remove('@raihasa/token', { path: '/' });
};
