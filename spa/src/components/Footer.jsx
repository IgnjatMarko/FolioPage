import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-white p-4">
      <aside>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};
