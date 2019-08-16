import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, Media } from '../../types';
import { API_URL } from '../../constants/api';
import ImageSpinner from '../imageSpinner/ImageSpinner';

interface FeaturedImageProps {
  postId: number;
}

const FeaturedImage: FunctionComponent<FeaturedImageProps> = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [media, setMedia] = useState<Media[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/media?parent=${postId}`).then(response =>
      response
        .json()
        .then((formattedResponse: Media[] | ApiError) => {
          if ((formattedResponse as ApiError).message) {
            throw new Error((formattedResponse as ApiError).message);
          }
          setMedia(formattedResponse as Media[]);
          setIsLoading(false);
        })
        .catch(error => {
          setLoadingFailed(true);
        })
    );
  }, [postId]);

  return (
    <>
      {media.length ? (
        <img
          style={{ width: '100%' }}
          src={media[0].media_details.sizes.medium_large.source_url}
          alt="Featured image"
        />
      ) : (
        <ImageSpinner />
      )}
    </>
  );
};

export default FeaturedImage;
