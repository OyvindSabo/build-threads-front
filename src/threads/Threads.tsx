import React, { useState, useEffect, FunctionComponent } from 'react';
import Spinner from '../components/spinner/Spinner';
import ThreadSummary from '../components/threadSummary/ThreadSummary';
import { API_URL } from '../constants/api';
import MainContainer from '../components/mainContainer/MainContainer';

const ThreadsView: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [threads, setThreads] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/threads`).then(response =>
      response
        .json()
        .then(formattedResponse => {
          // The impotant parts are title.rendered: string, featured_media: number, slug: string, and author? autor should be used to determine if posts are comments or part of the thread.
          console.log('formattedResponse: ', formattedResponse);
          setIsLoading(false);
          setThreads(formattedResponse);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, []);

  return (
    <>
      <MainContainer>
        {isLoading && <Spinner />}
        {loadingFailed && <div>Loading failed</div>}
        {threads.map(thread => (
          <ThreadSummary thread={thread} />
        ))}
      </MainContainer>
    </>
  );
};

export default ThreadsView;
