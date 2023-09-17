import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center">
      <div
        style={{ animationDuration: "0.6s" }}
        className="w-6 h-6 border-2 border-t-primary-color border-r-transparent border-b-secondary-color border-l-transparent rounded-full animate-spin"
      ></div>
    </div>
  );
}
