class User {
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
  async login(username: string, password: string) {
    console.log('user');
    Object.assign(this._user, {
      id: 1, // id should be fetched from user api based on username
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

export const currentUser = new User();
