import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link } from 'react-router-dom';
import { Thread, User, ApiError, Post } from '../../types';
import { API_URL } from '../../constants/api';
import ProfilePicture from '../profilePicture/ProfilePicture';
import FeaturedImage from '../featuredImage/FeaturedImage';
import Username from '../username/Username';

const ShadowBox = styled(Shadow)`
  margin: 20px;
  padding: 20px;
  background: white;
`;

interface ThreadSummaryProps {
  post: Post;
}

const PostSummary: FunctionComponent<ThreadSummaryProps> = ({ post }) => (
  <Link to={`/threads/${post.thread_references[0]}`}>
    <ShadowBox>
      {<FeaturedImage postId={post.id} />}
      {<Username userId={post.author} />}{' '}
      {`added a new post to ${post.thread_references /*thread name*/}`}
      <h1>{post.title.rendered}</h1>
      {/*<PostExcerpt postId={post.id} />*/}
    </ShadowBox>
  </Link>
);

export default PostSummary;
