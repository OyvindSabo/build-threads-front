import styled from 'styled-components';
import { GREY } from '../../constants/colors';

const Navigator = styled.div`
  background: ${({ backgroundColor }: { backgroundColor?: string }) =>
    backgroundColor ? backgroundColor : GREY};
  box-shadow: 0 0 5px ${GREY};
  position: fixed;
  height: 100vh;
  width: 180px;
  left: 0;
  top: 0;
`;

export default Navigator;
