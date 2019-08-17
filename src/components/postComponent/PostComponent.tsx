import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Post } from '../../types';
import Shadow from '../shadow/Shadow';
import ProfilePicture from '../profilePicture/ProfilePicture';
import FadeIn from '../appearanceAnimations/FadeIn';

const Box = styled(Shadow)`
  margin: 20px;
  padding: 20px;
  background: white;
`;

interface PostComponentProps {
  post: Post;
}

const PostComponent: FunctionComponent<PostComponentProps> = ({ post }) => {
  return (
    <FadeIn>
      <Box>
        <ProfilePicture userId={post.author} size={48} />
        <h1>{post.title.rendered}</h1>
        <p>{post.content.rendered}</p>
      </Box>
    </FadeIn>
  );
};

export default PostComponent;
