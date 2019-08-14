import React, { useState, FunctionComponent } from 'react';
import TopBar from '../../components/topBar/TopBar';
import { INPUT_PADDING } from '../../constants/sizes';
import { currentUser } from '../../services/authentication';
import styled from 'styled-components';
import { LIGHT_BLUE, INPUT_COLOR } from '../../constants/colors';
import WidgetContainer from '../../components/widgetContainer/WidgetContainer';
import Shadow from '../../components/shadow/Shadow';

const ShadowBox = styled(Shadow)`
  background: white;
  margin: 20px;
  padding: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 0px;
`;

const Input = styled.input`
  background: ${INPUT_COLOR};
  border: none;
  box-sizing: border-box;
  display: block;
  outline: none;
  padding: ${INPUT_PADDING}px;
  width: 100%;
  margin-bottom: 20px;
`;

const Button = styled.div`
  background: ${LIGHT_BLUE[500]}
  display: blocK;
  padding: ${INPUT_PADDING}px;
  cursor: pointer;
`;

interface LoginProps {
  history: any[];
}

const Login: FunctionComponent<LoginProps> = ({ history }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <>
      <TopBar title={'Login'} />
      <WidgetContainer>
        <ShadowBox>
          <InputWrapper>
            <Input
              type="text"
              onChange={event => {
                setUsername(event.target.value);
              }}
              placeholder={'Username'}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              onChange={event => setPassword(event.target.value)}
              placeholder={'Password'}
            />
            <Button
              onClick={() => {
                currentUser
                  .login(username, password)
                  .then(() => {
                    history.push('/dashboard');
                  })
                  .catch(error => {});
              }}
            >
              Login
            </Button>
          </InputWrapper>
        </ShadowBox>
      </WidgetContainer>
    </>
  );
};

export default Login;
