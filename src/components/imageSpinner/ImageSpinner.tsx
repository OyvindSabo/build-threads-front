import React from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';

interface ImageSpinnerProps {
  height?: number;
  width?: number;
}

const BoundingBox = styled.div<ImageSpinnerProps>`
  display: inline-block;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

const ImageSpinner = ({ height, width }: ImageSpinnerProps) => (
  <BoundingBox height={height} width={width}>
    <Spinner />
  </BoundingBox>
);

export default ImageSpinner;
