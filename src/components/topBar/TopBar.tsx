import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { GREY } from '../../constants/colors';
import MainContainer from '../mainContainer/MainContainer';
import Spacer from '../spacer/Spacer';
import { PADDING, FONT_SIZE } from '../../constants/sizes';
import Shadow from '../shadow/Shadow';

const ShadowBar = styled(Shadow)`
  box-shadow: 0 0 5px ${GREY};
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
`;

const Padding = styled.div`
  padding: ${PADDING}px;
`;

interface TopBarProps {
  title: string;
}

const TopBar: FunctionComponent<TopBarProps> = ({ title }) => {
  const barHeight = 2 * PADDING + FONT_SIZE;
  return (
    <>
      <ShadowBar>
        <MainContainer>
          <Padding>{title}</Padding>
        </MainContainer>
      </ShadowBar>
      <Spacer height={barHeight} />
    </>
  );
};

export default TopBar;
