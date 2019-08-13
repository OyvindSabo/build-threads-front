import React from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';

interface ImageSpinnerProps {
  height: number;
  width: number;
}

const BoundingBox = styled.div<ImageSpinnerProps>`
  display: inline-block;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const ImageSpinner = ({ height, width }: ImageSpinnerProps) => (
  <BoundingBox height={height} width={width}>
    <Spinner />
  </BoundingBox>
);

export default ImageSpinner;
