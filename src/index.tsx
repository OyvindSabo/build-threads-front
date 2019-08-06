import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './home/Home';
import Threads from './threads/Threads';
import Profiles from './profiles/Profiles';
import Navigator from './components/navigator/Navigator';
import MainContainer from './components/mainContainer/MainContainer';

const routing = (
  <Router>
    <Navigator>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/threads">Threads</Link>
        </li>
      </ul>
    </Navigator>
    <MainContainer>
      <Route exact path="/" component={Home} />
      <Route path="/profiles/" component={Profiles} />
      <Route path="/threads/" component={Threads} />
    </MainContainer>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
