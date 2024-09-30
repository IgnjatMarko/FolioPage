import React, { useState } from "react";

export default function BusinessCard() {
  const [notification, setNotification] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotification(`${text} kopirano!`);
      setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
    });
  };

  return (
    <div className="w-96 h-64 p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Jovan Savić</h2>
          <p className="text-sm text-gray-600">Menadžer projekta</p>
        </div>
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
            <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
            <path d="M4 15v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3" />
          </svg>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-gray-800">Gro-Build</h1>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span
            className="cursor-pointer"
            onClick={() => handleCopy("0606031312")}
          >
            060 603 1312
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span
            className="cursor-pointer"
            onClick={() => handleCopy("savic.jovan@icloud.com")}
          >
            savic.jovan@icloud.com
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle
              cx="12"
              cy="10"
              r="3"
            />
          </svg>
          <span>Beograd, 11000</span>
        </div>
      </div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded">
          {notification}
        </div>
      )}
    </div>
  );
}
