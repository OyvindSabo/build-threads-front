class User {
  _user: {
    id?: number;
    username?: string;
    password?: string;
  };
  _authenticationUpdateEvent: Event;
  constructor() {
    this._user = {
      id: undefined,
      username: undefined, // Should be fetched from localStorage
      password: undefined, // Should be fetched from localStorage
    };
    this._authenticationUpdateEvent = new Event('AUTHENTICATION_UPDATE');
  }
  getUser = () => this._user;
  isAuthenticated = () =>
    !!(this._user.id && this._user.username && this._user.password);
  login = (username: string, password: string) => {
    console.log('user');
    Object.assign(this._user, {
      id: 1, // id should be fetched from user api based on username
      username,
      password,
    });
    console.log('user: ', this._user);
    window.dispatchEvent(this._authenticationUpdateEvent);
  };
  logout = () => {
    Object.assign(this._user, {
      id: undefined,
      username: undefined,
      password: undefined,
    });
    window.dispatchEvent(this._authenticationUpdateEvent);
  };
}

export const currentUser = new User();
