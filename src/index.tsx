import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './views/home/Home';
import ThreadsView from './views/threads/Threads';
import Profiles from './views/profiles/Profiles';
import Navigator from './components/navigator/Navigator';
import ThreadView from './views/thread/Thread';
import Profile from './views/profile/Profile';
import Login from './views/login/Login';

const Routing = () => {
  const [user, setUser] = useState<{
    id?: number;
    username?: string;
    password?: string;
  }>({
    id: undefined,
    username: undefined, // Should be fetched from localstorage
    password: undefined, // Should be fetched from localStorage
  });

  const isAuthenticated = () => !!(user.id && user.username && user.password);
  const login = (id: number, username: string, password: string) => {
    setUser({
      id,
      username,
      password,
    });
  };

  const logout = () => {
    setUser({
      id: undefined,
      username: undefined,
      password: undefined,
    });
  };
  return (
    <Router>
      <Navigator>
        <ul>
          <li>
            {isAuthenticated() ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated() && (
            <li>
              <Link to={`/profiles/${user.id}`}>My profile</Link>
            </li>
          )}
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/threads">Threads</Link>
          </li>
        </ul>
      </Navigator>
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/profiles/" component={Profiles} />
      <Route exact path="/profiles/:userId/" component={Profile} />
      <Route exact path="/threads/" component={ThreadsView} />
      <Route exact path="/threads/:threadId/" component={ThreadView} />
    </Router>
  );
};
ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
