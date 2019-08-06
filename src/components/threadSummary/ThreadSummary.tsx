import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { GREY } from '../../constants/colors';

const Box = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 5px ${GREY};
`;

interface ThreadSummaryProps {
  title: string;
  id: string;
}

const ThreadSummary: FunctionComponent<ThreadSummaryProps> = ({
  title,
  id,
}) => {
  return <Box>{title}</Box>;
};

export default ThreadSummary;
