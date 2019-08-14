import React, { useState } from 'react';
import TopBar from '../../components/topBar/TopBar';
import MainContainer from '../../components/mainContainer/MainContainer';
import { INPUT_PADDING } from '../../constants/sizes';
import { currentUser } from '../../services/authentication';

const Login: React.FC = () => {
  //const { login } = location.state;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <>
      <TopBar title={'Login'} />
      <MainContainer>
        <div style={{ textAlign: 'center' }}>
          <input
            style={{ padding: `${INPUT_PADDING}px` }}
            type="text"
            onChange={event => {
              setUsername(event.target.value);
            }}
            placeholder={'Username'}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <input
            style={{ padding: `${INPUT_PADDING}px` }}
            type="password"
            onChange={event => setPassword(event.target.value)}
            placeholder={'Password'}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => currentUser.login(username, password)}>
            Login
          </button>
        </div>
      </MainContainer>
    </>
  );
};

export default Login;
