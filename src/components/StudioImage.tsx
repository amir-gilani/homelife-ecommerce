import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const StudioImage: React.FC<StudioImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#EAE7DF] p-6 text-center text-[#4A6432]">
        <Sparkles className="mb-2 h-7 w-7 opacity-70" />
        <span className="text-xs font-medium text-[#3C4A2E]">{fallbackLabel || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
