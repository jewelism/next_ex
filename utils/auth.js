import Cookies from 'js-cookie';

export const saveAuthData = v => Cookies.set('auth', JSON.stringify(v));
export const getAuthData = () => Cookies.get('auth');

export const isAuthed = () => getAuthData();
export const logout = () => {
  Cookies.remove('auth');
  location.href = '/';
};

