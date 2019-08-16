import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Shadow from '../shadow/Shadow';
import { Link } from 'react-router-dom';
import { Thread, User, ApiError, Post } from '../../types';
import { API_URL } from '../../constants/api';
import ProfilePicture from '../profilePicture/ProfilePicture';
import FeaturedImage from '../featuredImage/FeaturedImage';

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
      <ProfilePicture userId={post.author} size={48} />
      {post.title.rendered}
      {/*<Username userId={post.author} />*/}
      {/*<PostExcerpt postId={post.id} />*/}
    </ShadowBox>
  </Link>
);

export default PostSummary;
