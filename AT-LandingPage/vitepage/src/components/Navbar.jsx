import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export const Navbar = () => {
  const [notification, setNotification] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotification(`${text} kopirano!`);
      setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
    });
  };

  return (
    <div className="navbar bg-base-100 flex flex-col lg:flex-row">
      <div className="navbar-start"></div>
      <div className="navbar-center flex flex-col lg:flex-row items-center">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => handleCopy("savic.jovan@icloud.com")}
        >
          <IoIosMail />
          savic.jovan@icloud.com
        </button>
        <button
          className="btn btn-ghost text-xl"
          onClick={() => handleCopy("0606031312")}
        >
          <FaPhoneAlt />
          060/603-1312
        </button>
      </div>
      <div className="navbar-end"></div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded">
          {notification}
        </div>
      )}
    </div>
  );
};
