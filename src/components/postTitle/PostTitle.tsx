import React, { FunctionComponent, useState, useEffect } from 'react';
import { ApiError, Media, Post, Thread } from '../../types';
import { API_URL } from '../../constants/api';
import styled from 'styled-components';
import { THREAD_NAME_COLOR, TITLE_COLOR } from '../../constants/colors';
import UnstyledLink from '../unstyledLink/UnstyledLink';

const PostTitleStyle = styled.h1`
  color: ${TITLE_COLOR};
`;

interface PostTitleProps {
  post: Post;
}

const PostTitle: FunctionComponent<PostTitleProps> = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [thread, setThread] = useState<Thread | null>(null);

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
    <PostTitleStyle>
      {thread && post ? (
        <UnstyledLink
          style={{ textDecoration: 'none' }}
          to={`/threads/${thread.id}`}
        >
          {post.title.rendered}
        </UnstyledLink>
      ) : (
        'Loading...'
      )}
    </PostTitleStyle>
  );
};

export default PostTitle;
