import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link } from 'react-router-dom';
import { Thread, User, ApiError } from '../../types';
import { API_URL } from '../../constants/api';
import ProfilePicture from '../profilePicture/ProfilePicture';

const ShadowBox = styled(Shadow)`
  margin: 20px;
  padding: 20px;
  background: white;
`;

interface ThreadSummaryProps {
  thread: Thread;
}

const ThreadSummary: FunctionComponent<ThreadSummaryProps> = ({ thread }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/users/${thread.author}`).then(response =>
      response
        .json()
        .then((formattedResponse: User | ApiError) => {
          if ((formattedResponse as ApiError).message) {
            throw new Error((formattedResponse as ApiError).message);
          }
          setUser(formattedResponse as User);
          setIsLoading(false);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, [thread]);

  return (
    <Link to={`/threads/${thread.id}`}>
      <ShadowBox>
        <ProfilePicture userId={thread.author} size={48} />
        {thread.title.rendered}
      </ShadowBox>
    </Link>
  );
};

export default ThreadSummary;
