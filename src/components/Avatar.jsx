import { useState } from "react";
import {UserRoundPen} from "lucide-react";

function Avatar({ src, alt = "Avatar", fallbackText = (<UserRoundPen/>) , className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-300 text-gray-700 text-2xl font-semibold select-none ${className}`}
    >
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-2xl">{fallbackText}</span>
      )}
    </div>
  );
}

export default Avatar;
