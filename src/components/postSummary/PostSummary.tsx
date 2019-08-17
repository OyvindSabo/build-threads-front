import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Thread, User, ApiError, Post } from '../../types';
import { API_URL } from '../../constants/api';
import ProfilePicture from '../profilePicture/ProfilePicture';
import FeaturedImage from '../featuredImage/FeaturedImage';
import Username from '../username/Username';
import ThreadName from '../threadName/ThreadName';

const ShadowBox = styled(Shadow)`
  margin: 20px;
  padding: 20px;
  background: white;
`;

interface ThreadSummaryProps extends RouteComponentProps<any> {
  post: Post;
}

const PostSummary: FunctionComponent<ThreadSummaryProps> = ({ post }) => {
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
    <ShadowBox>
      {<FeaturedImage post={post} />}
      {<ThreadName post={post} />}
      {<Username userId={post.author} />}{' '}
      {`added a new post to ${post.thread_references /*thread name*/}`}
      <h1>{post.title.rendered}</h1>
      {/*<PostExcerpt postId={post.id} />*/}
    </ShadowBox>
  );
};

export default withRouter(PostSummary);
