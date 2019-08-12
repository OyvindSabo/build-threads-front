import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { GREY } from '../../constants/colors';

const Box = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 5px ${GREY};
  background: white;
`;

interface ThreadSummaryProps {
  title: string;
  id: number;
}

const ThreadSummary: FunctionComponent<ThreadSummaryProps> = ({
  title,
  id,
}) => {
  return (
    <a href={`/threads/${id}`}>
      <Box>{title}</Box>
    </a>
  );
};

export default ThreadSummary;
