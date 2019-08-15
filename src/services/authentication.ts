import { API_URL } from '../constants/api';
import { ApiError, User } from '../types';
import { reject } from 'q';

class CurrentUser {
  _user: {
    id?: number;
    username?: string;
    password?: string;
  };
  _authenticationUpdateEvent: Event;
  constructor() {
    this._user = {
      id: parseInt(localStorage.getItem('id') || '0') || undefined,
      username: localStorage.getItem('username') || undefined,
      password: localStorage.getItem('password') || undefined,
    };
    this._authenticationUpdateEvent = new Event('AUTHENTICATION_UPDATE');
  }
  getUser = () => this._user;
  isAuthenticated = () =>
    !!(this._user.id && this._user.username && this._user.password);

  async login(
    id: number,
    username: string,
    password: string
  ): Promise<ApiError | void> {
    Object.assign(this._user, {
      id,
      username,
      password,
    });
    localStorage.setItem('id', `${this._user.id}`);
    localStorage.setItem('username', `${this._user.username}`);
    localStorage.setItem('password', `${this._user.password}`);
    window.dispatchEvent(this._authenticationUpdateEvent);
  }

  logout = () => {
    Object.assign(this._user, {
      id: undefined,
      username: undefined,
      password: undefined,
    });
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.dispatchEvent(this._authenticationUpdateEvent);
  };
}

export const currentUser = new CurrentUser();
