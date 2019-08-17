import React, { FunctionComponent } from 'react';
import { Post } from '../../types';
import styled from 'styled-components';
import { DATE_COLOR } from '../../constants/colors';

const PostDateStyle = styled.span`
  color: ${DATE_COLOR};
`;

interface PostDateProps {
  post: Post;
}

const PostDate: FunctionComponent<PostDateProps> = ({ post }) => {
  return <PostDateStyle>{post.date}</PostDateStyle>;
};

export default PostDate;
