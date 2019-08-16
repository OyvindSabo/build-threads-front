import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link } from 'react-router-dom';
import { Thread } from '../../types';
import ProfilePicture from '../profilePicture/ProfilePicture';

const ShadowBox = styled(Shadow)`
  margin: 20px;
  padding: 20px;
  background: white;
`;

interface ThreadSummaryProps {
  thread: Thread;
}

const ThreadSummary: FunctionComponent<ThreadSummaryProps> = ({ thread }) => (
  <Link to={`/threads/${thread.id}`}>
    <ShadowBox>
      <ProfilePicture userId={thread.author} size={48} />
      {thread.title.rendered}
    </ShadowBox>
  </Link>
);

export default ThreadSummary;
