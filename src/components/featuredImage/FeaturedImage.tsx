import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, Media, Post, Thread } from '../../types';
import { API_URL } from '../../constants/api';
import ImageSpinner from '../imageSpinner/ImageSpinner';
import FadeIn from '../appearanceAnimations/FadeIn';

interface FeaturedImageProps {
  post: Post;
}

const FeaturedImage: FunctionComponent<FeaturedImageProps> = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [media, setMedia] = useState<Media[]>([]);
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/wp-json/wp/v2/media?parent=${post.id}`).then(response =>
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
  }, [post]);

  useEffect(() => {
    fetch(
      `${API_URL}/wp-json/wp/v2/threads?thread_references=${
        post.thread_references[0]
      }`
    )
      .then(response => {
        response.json().then((formattedResponse: Thread[] | ApiError) => {
          const apiErrorMessage = (formattedResponse as ApiError).message;
          if (apiErrorMessage) {
            throw new Error(apiErrorMessage);
          }
          const thread = (formattedResponse as Thread[])[0];
          setThread(thread);
          setIsLoading(false);
        });
      })
      .catch(error => {
        setLoadingFailed(true);
      });
  }, [post]);

  return (
    <>
      {media.length && thread ? (
        <Link to={`/threads/${thread.id}`}>
          <FadeIn>
            <img
              style={{ width: '100%' }}
              src={media[0].media_details.sizes.medium_large.source_url}
              alt="Featured image"
            />
          </FadeIn>
        </Link>
      ) : null}
    </>
  );
};

export default FeaturedImage;
