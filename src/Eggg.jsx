import { useState } from "react";
function Avatar({ src, alt = "Avatar", fallbackText = "?" , className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-300 text-gray-700 text-lg font-semibold select-none ${className}`}
    >
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{fallbackText}</span>
      )}
    </div>
  );
}

export default Avatar;
