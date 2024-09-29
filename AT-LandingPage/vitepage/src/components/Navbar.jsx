import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">
          <IoIosMail />
          savic.jovan@icloud.com
        </a>
        <a className="btn btn-ghost text-xl">
          <FaPhoneAlt />
          060/603-1312
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

{
  /* <a className="btn btn-ghost text-xl">
          <IoIosMail />
          savic.jovan@icloud.com
          <FaPhoneAlt />
            060-603-1312
        </a> */
}
