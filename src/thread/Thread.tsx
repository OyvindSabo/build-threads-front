import React, { useState, useEffect, FunctionComponent } from 'react';
import Spinner from '../components/spinner/Spinner';
import { API_URL } from '../constants/api';
import PostComponent from '../components/postComponent/PostComponent';
import { Thread, ApiError, Post } from '../types';
import TopBar from '../components/topBar/TopBar';
import MainContainer from '../components/mainContainer/MainContainer';

interface ThreadViewProps {
  match: {
    params: {
      threadId: number;
    };
  };
}

const ThreadView: FunctionComponent<ThreadViewProps> = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [thread, setThread] = useState<Thread | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const { threadId } = match.params;
  console.log('threadId: ', threadId);
  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/threads/${threadId}`).then(thread =>
      thread
        .json()
        .then((formattedThread: Thread | ApiError) => {
          // The impotant parts are title.rendered: string, featured_media: number, slug: string, and author? autor should be used to determine if posts are comments or part of the thread.
          console.log('formattedThread: ', formattedThread);
          if ((formattedThread as ApiError).message) {
            throw new Error((formattedThread as ApiError).message);
          }
          setThread(formattedThread as Thread);
          return formattedThread;
          // Once we have the thread, we can fetch all the posts which have a thread_reference matching the tread's thread_reference
        })
        .then(formattedThread => {
          if ((formattedThread as Thread).thread_references) {
            const threadReferences = (formattedThread as Thread)
              .thread_references;
            fetch(
              `${API_URL}/wp-json/wp/v2/posts?thread_references=${
                threadReferences[0]
              }`
            ).then(posts => {
              posts.json().then((formattedPosts: Post[] | ApiError) => {
                console.log('formattedPosts: ', formattedPosts);
                setIsLoading(false);
                if ((formattedThread as ApiError).message) {
                  throw new Error((formattedThread as ApiError).message);
                }
                setPosts(formattedPosts as Post[]);
              });
            });
          }
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, [match]);

  return (
    <>
      <TopBar title={thread ? thread.title.rendered : 'Loading'} />
      <MainContainer>
        {isLoading && <Spinner />}
        {loadingFailed && <div>Loading failed</div>}
        {posts.map(post => (
          <PostComponent post={post} />
        ))}
      </MainContainer>
    </>
  );
};

export default ThreadView;
