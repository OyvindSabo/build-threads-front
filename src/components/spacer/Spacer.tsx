import styled from 'styled-components';

interface SpacerProps {
  height: number;
}

const Spacer = styled.div`
  height: ${({ height }: SpacerProps) => height}px;
`;

export default Spacer;
