import React, { useState, useEffect, FunctionComponent } from 'react';
import { User, Thread, ApiError } from '../../types';
import { API_URL } from '../../constants/api';
import TopBar from '../../components/topBar/TopBar';
import MainContainer from '../../components/mainContainer/MainContainer';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import ThreadSummary from '../../components/threadSummary/ThreadSummary';

interface ProfileProps {
  match: {
    params: {
      userId: number;
    };
  };
}

const Profile: FunctionComponent<ProfileProps> = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [threads, setThreads] = useState<Thread[]>([]);

  const { userId } = match.params;
  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/users/${userId}`).then(response =>
      response
        .json()
        .then((formattedResponse: User | ApiError) => {
          if ((formattedResponse as ApiError).message) {
            throw new Error((formattedResponse as ApiError).message);
          }
          setUser(formattedResponse as User);
          return formattedResponse as User;
          //setIsLoading(false);
        })
        .then(user => {
          fetch(`${API_URL}/wp-json/wp/v2/threads?author=${user.id}`).then(
            response =>
              response
                .json()
                .then(formattedResponse => {
                  if ((formattedResponse as ApiError).message) {
                    throw new Error((formattedResponse as ApiError).message);
                  }
                  setThreads(formattedResponse);
                  setIsLoading(false);
                })
                .catch(error => {
                  setLoadingFailed(true);
                })
          );
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, [userId]);

  return (
    <>
      <TopBar title={user ? user.name : 'Loading'} />
      <MainContainer>
        <ProfilePicture userId={userId} size={96} />
        {loadingFailed && <div>Loading failed</div>}
        {threads.map(thread => (
          <ThreadSummary thread={thread} />
        ))}
      </MainContainer>
    </>
  );
};

export default Profile;
