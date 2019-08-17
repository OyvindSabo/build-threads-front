import React, { FunctionComponent } from 'react';
import { Post } from '../../types';
import styled from 'styled-components';
import { EXCERPT_COLOR } from '../../constants/colors';

const PostExcerptStyle = styled.span`
  color: ${EXCERPT_COLOR};
`;

interface PostDateProps {
  post: Post;
}

const PostExcerpt: FunctionComponent<PostDateProps> = ({ post }) => {
  return <PostExcerptStyle>{post.excerpt.rendered}</PostExcerptStyle>;
};

export default PostExcerpt;
