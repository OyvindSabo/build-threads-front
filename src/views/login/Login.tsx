import React, { useState, FunctionComponent } from 'react';
import TopBar from '../../components/topBar/TopBar';
import { INPUT_PADDING } from '../../constants/sizes';
import { currentUser } from '../../services/authentication';
import styled from 'styled-components';
import { LIGHT_BLUE, INPUT_COLOR } from '../../constants/colors';
import WidgetContainer from '../../components/widgetContainer/WidgetContainer';
import Shadow from '../../components/shadow/Shadow';
import { ApiError, User } from '../../types';
import { API_URL } from '../../constants/api';

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
  const [errorMessage, setErrorMessage] = useState<string>('');
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
                fetch(`${API_URL}/wp-json/wp/v2/users/`)
                  .then(response =>
                    response
                      .json()
                      .then((formattedResponse: User[] | ApiError) => {
                        if ((formattedResponse as ApiError).message) {
                          throw new Error(
                            (formattedResponse as ApiError).message
                          );
                        }
                        const users = formattedResponse as User[];
                        const user = users.find(user => user.name === username);
                        if (!user) {
                          throw new Error(
                            'A user with this username does not exist.'
                          );
                        }
                        currentUser.login(user.id, username, password);
                        history.push('/');
                      })
                  )
                  .catch(errorMessage => {
                    setErrorMessage(`${errorMessage}`);
                  });
              }}
            >
              Login
            </Button>
            {errorMessage}
          </InputWrapper>
        </ShadowBox>
      </WidgetContainer>
    </>
  );
};

export default Login;
