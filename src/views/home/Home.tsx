import React, { useState, useEffect, FunctionComponent } from 'react';
import Spinner from '../../components/spinner/Spinner';
import { API_URL } from '../../constants/api';
import MainContainer from '../../components/mainContainer/MainContainer';
import TopBar from '../../components/topBar/TopBar';
import PostSummary from '../../components/postSummary/PostSummary';

const Home: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/posts`).then(response =>
      response
        .json()
        .then(formattedResponse => {
          setIsLoading(false);
          setPosts(formattedResponse);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, []);

  return (
    <>
      <TopBar title={'Recent posts'} />
      <MainContainer>
        {isLoading && <Spinner />}
        {loadingFailed && <div>Loading failed</div>}
        {posts.map(post => (
          <PostSummary post={post} />
        ))}
      </MainContainer>
    </>
  );
};

export default Home;
