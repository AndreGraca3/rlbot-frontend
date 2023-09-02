import React from "react";

export default function ScrollDisplayer({ children }) {
  return (
    <div className="w-full h-60 rounded-md px-4">
      <div className="overflow-y-auto p-4 [&>*]:mb-4 rounded-md overflow-hidden items-center flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}
