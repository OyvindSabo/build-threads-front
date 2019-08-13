import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link } from 'react-router-dom';

const ShadowBox = styled(Shadow)`
  margin: 20px;
  padding: 20px;
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
    <Link to={`/threads/${id}`}>
      <ShadowBox>{title}</ShadowBox>
    </Link>
  );
};

export default ThreadSummary;
