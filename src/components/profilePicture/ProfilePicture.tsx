import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ApiError } from '../../types';
import { API_URL } from '../../constants/api';
import ImageSpinner from '../imageSpinner/ImageSpinner';
import { getUserByUserId } from '../../services/apiServices';

interface ProfilePictureProps {
  userId: number;
  size: 24 | 48 | 96;
}

const ProfilePicture: FunctionComponent<ProfilePictureProps> = ({
  userId,
  size,
}: ProfilePictureProps) => {
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
    <Link to={`/profiles/${userId}`}>
      {user ? (
        <img src={user!.avatar_urls[size]} alt="User Avatar" />
      ) : (
        <ImageSpinner height={size} width={size} />
      )}
    </Link>
  );
};

export default ProfilePicture;
