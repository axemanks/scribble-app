import React, { useState, useEffect } from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

const SocialMedia = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <div>
      <FacebookShareButton
        url={url}
        quote={'Check this out!'}
        hashtag="#AI #replicate"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        quote={'Check this out!'}
        hashtag="#AI #replicate"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}

export default SocialMedia