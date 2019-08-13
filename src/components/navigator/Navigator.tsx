import styled from 'styled-components';
import { BLUE_GREY } from '../../constants/colors';
import Shadow from '../shadow/Shadow';

const Navigator = styled(Shadow)`
  background: ${({ backgroundColor }: { backgroundColor?: string }) =>
    backgroundColor ? backgroundColor : BLUE_GREY[800]};
  position: fixed;
  height: 100vh;
  width: 180px;
  left: 0;
  top: 0;
  z-index: 1;
`;

export default Navigator;
