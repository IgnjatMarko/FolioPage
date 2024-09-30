import React from "react";

export const Menu = () => {
  return (
    <div className="navbar bg-base-100 bg-opacity-0 text-base-100">
      <div className="navbar-start">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center">
      <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-info-content dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#top">Početna</a>
            </li>
            <li>
              <a href="#molerski-radovi">Molerski radovi</a>
            </li>
            <li>
              <a href="#dekorativni-radovi">Dekorativni radovi</a>
            </li>
            <li>
            <a href="#gipsani-radovi">Gipsani radovi</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <a href="#top" className="text-xl">Početna</a>
          </li>
          <li>
            <a href="#molerski-radovi" className="text-xl">Molerski radovi</a>
          </li>
          <li>
            <a href="#dekorativni-radovi" className="text-xl">Dekorativni radovi</a>
          </li>
          <li>
            <a href="#gipsani-radovi" className="text-xl">Gipsani radovi</a>
          </li>
          <li>
            <a href="#contact" className="text-xl">Kontakt</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};
