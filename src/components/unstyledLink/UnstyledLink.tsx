import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default UnstyledLink;
