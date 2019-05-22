import Router from "next/router";
import Cookies from 'js-cookie';

export const saveAuthData = v => Cookies.set('auth', JSON.stringify(v));
export const getAuthData = () => Cookies.get('auth');

export const isAuthed = () => getAuthData();
export const logout = () => new Promise(resolve => {
  Cookies.remove('auth');
  Router.push('/');
  window.FB && window.FB.logout(resolve);
});

