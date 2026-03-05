"use client";

import Image from "next/image";
import { useState } from "react";

export function Avatar({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-800 ring-2 ring-neutral-700 flex items-center justify-center text-2xl font-semibold text-neutral-400">
        {fallback}
      </div>
    );
  }

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-neutral-800 ring-2 ring-neutral-700">
      <Image
        src={src}
        alt={alt}
        width={112}
        height={112}
        className="object-cover w-full h-full"
        unoptimized={src.startsWith("http")}
        onError={() => setErrored(true)}
      />
    </div>
  );
}
