import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { GREY } from '../../constants/colors';
import MainContainer from '../mainContainer/MainContainer';

const Bar = styled.div`
  box-shadow: 0 0 5px ${GREY};
  position: fixed;
  background: white;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
`;

interface TopBarProps {
  title: string;
}

const TopBar: FunctionComponent<TopBarProps> = ({ title }) => {
  return (
    <Bar>
      <MainContainer>{title}</MainContainer>
    </Bar>
  );
};

export default TopBar;
