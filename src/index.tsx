import React, { useState, useEffect } from 'react';
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
import { currentUser } from './services/authentication';

const Routing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    currentUser.isAuthenticated()
  );
  useEffect(() => {
    window.addEventListener('AUTHENTICATION_UPDATE', () =>
      setIsAuthenticated(currentUser.isAuthenticated())
    );

    return () => {
      window.removeEventListener('AUTHENTICATION_UPDATE', () =>
        setIsAuthenticated(currentUser.isAuthenticated())
      );
    };
  }, []);
  return (
    <Router>
      <Navigator>
        <ul>
          <li>
            {isAuthenticated ? (
              <button onClick={currentUser.logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to={`/profiles/${currentUser.getUser().id}`}>
                My profile
              </Link>
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
