import React from 'react';
import styled from 'styled-components';
import { SPINNER_COLOR } from '../../constants/colors';

const Center = styled.div`
  margin: auto;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;

  & .path {
    stroke: ${SPINNER_COLOR};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = () => (
  <Center>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </Center>
);

export default Spinner;
