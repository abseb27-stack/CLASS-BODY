import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-slate-800 flex flex-col items-center justify-center text-slate-400 p-4 select-none ${className}`}
      >
        <Layers className="w-8 h-8 text-[#D6A84F] opacity-70 mb-2" />
        <span className="text-xs font-semibold tracking-wide text-center uppercase text-slate-300">
          {fallbackText || alt || 'LIFTEX Technical Asset'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <Layers className="w-6 h-6 text-slate-600 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
