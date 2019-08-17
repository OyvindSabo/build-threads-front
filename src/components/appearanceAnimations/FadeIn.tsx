import styled from 'styled-components';

const FadeIn = styled.div`
  animation-duration: 0.5s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default FadeIn;
