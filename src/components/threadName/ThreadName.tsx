import React, { FunctionComponent, useState, useEffect } from 'react';
import { ApiError, Media, Post, Thread } from '../../types';
import { API_URL } from '../../constants/api';
import styled from 'styled-components';
import { THREAD_NAME_COLOR } from '../../constants/colors';
import UnstyledLink from '../unstyledLink/UnstyledLink';

const ThreadNameStyle = styled.h3`
  color: ${THREAD_NAME_COLOR};
`;

interface ThreadNameProps {
  post: Post;
}

const ThreadName: FunctionComponent<ThreadNameProps> = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [media, setMedia] = useState<Media[]>([]);
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/media?parent=${post.id}`).then(response =>
      response
        .json()
        .then((formattedResponse: Media[] | ApiError) => {
          if ((formattedResponse as ApiError).message) {
            throw new Error((formattedResponse as ApiError).message);
          }
          setMedia(formattedResponse as Media[]);
          setIsLoading(false);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, [post]);

  useEffect(() => {
    fetch(
      `${API_URL}/wp-json/wp/v2/threads?thread_references=${
        post.thread_references[0]
      }`
    )
      .then(response => {
        response.json().then((formattedResponse: Thread[] | ApiError) => {
          const apiErrorMessage = (formattedResponse as ApiError).message;
          if (apiErrorMessage) {
            throw new Error(apiErrorMessage);
          }
          const thread = (formattedResponse as Thread[])[0];
          setThread(thread);
          setIsLoading(false);
        });
      })
      .catch(error => {
        setLoadingFailed(true);
      });
  }, [post]);

  return (
    <ThreadNameStyle>
      {thread ? (
        <UnstyledLink
          style={{ textDecoration: 'none' }}
          to={`/threads/${thread.id}`}
        >
          {thread.title.rendered}
        </UnstyledLink>
      ) : (
        'Loading...'
      )}
    </ThreadNameStyle>
  );
};

export default ThreadName;
