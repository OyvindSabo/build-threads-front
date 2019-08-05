import React from 'react';
import Spinner from '../components/spinner/Spinner';
import logo from '../logo.svg';

const Threads: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/threads/Threads.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Threads;
