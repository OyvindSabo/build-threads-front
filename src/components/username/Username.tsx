import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ApiError } from '../../types';
import { API_URL } from '../../constants/api';
import ImageSpinner from '../imageSpinner/ImageSpinner';
import { getUserByUserId } from '../../services/apiServices';

interface UsernameProps {
  userId: number;
}

const Username: FunctionComponent<UsernameProps> = ({
  userId,
}: UsernameProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserByUserId(userId);
    fetch(`${API_URL}/wp-json/wp/v2/users/${userId}`).then(response =>
      response
        .json()
        .then((formattedResponse: User | ApiError) => {
          if ((formattedResponse as ApiError).message) {
            throw new Error((formattedResponse as ApiError).message);
          }
          setUser(formattedResponse as User);
          setIsLoading(false);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, [userId]);

  return (
    <Link to={`/profiles/${userId}`}>{user ? user.name : 'Loading...'}</Link>
  );
};

export default Username;
