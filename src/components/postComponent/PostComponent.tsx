import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Post } from '../../types';
import Shadow from '../shadow/Shadow';
import ProfilePicture from '../profilePicture/ProfilePicture';

const Box = styled(Shadow)`
  margin: 20px;
  padding: 20px;
  background: white;

  animation-duration: 0.5s;
  animation-name: slidein;

  position: relative;

  @keyframes slidein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

interface PostComponentProps {
  post: Post;
}

const PostComponent: FunctionComponent<PostComponentProps> = ({ post }) => {
  return (
    <Box>
      <ProfilePicture userId={post.author} size={48} />
      <h1>{post.title.rendered}</h1>
      <p>{post.content.rendered}</p>
    </Box>
  );
};

export default PostComponent;
