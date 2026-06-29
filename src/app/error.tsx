"use client"; 

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4 text-center">
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="mt-2 p-2 bg-red-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
