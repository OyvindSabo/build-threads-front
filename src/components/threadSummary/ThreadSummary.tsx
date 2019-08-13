import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link } from 'react-router-dom';
import { Thread, User } from '../../types';
import { API_URL } from '../../constants/api';
import ImageSpinner from '../imageSpinner/ImageSpinner';

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
        .then(formattedResponse => {
          setIsLoading(false);
          setUser(formattedResponse);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, []);

  return (
    <Link to={`/threads/${thread.id}`}>
      <ShadowBox>
        {user ? (
          <img src={user.avatar_urls[48]} alt="User Avatar" />
        ) : (
          <ImageSpinner height={48} width={48} />
        )}
        {thread.title.rendered}
      </ShadowBox>
    </Link>
  );
};

export default ThreadSummary;
