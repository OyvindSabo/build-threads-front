import React, { useState, FunctionComponent } from 'react';
import TopBar from '../../components/topBar/TopBar';
import MainContainer from '../../components/mainContainer/MainContainer';
import { INPUT_PADDING } from '../../constants/sizes';

interface ProfileProps {
  match: {
    params: {
      userId: number;
    };
  };
}

const Login: FunctionComponent<ProfileProps> = ({ match }) => {
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
      </MainContainer>
    </>
  );
};

export default Login;
