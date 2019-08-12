import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { GREY } from '../../constants/colors';
import { Post } from '../../types';

const Box = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 5px ${GREY};
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
      <h1>{post.title.rendered}</h1>
      <p>{post.content.rendered}</p>
    </Box>
  );
};

export default PostComponent;
