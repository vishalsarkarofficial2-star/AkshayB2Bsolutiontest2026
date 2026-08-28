import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = PLACEHOLDER, 
  className,
  ...props 
}) => {
  const [error, setError] = useState(false);

  // Ensure https
  const safeSrc = src?.replace(/^http:\/\//i, 'https://');

  return (
    <img
      src={error ? fallbackSrc : safeSrc}
      alt={alt || 'Image'}
      className={`block max-w-full h-auto ${className}`}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
};
