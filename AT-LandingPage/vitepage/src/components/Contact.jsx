import React from "react";
import BusinessCard from "../utils/BusinessCard";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Kontakt
          </h2>

          {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Tel: 060/603-1312 <br/>
            E-mail: savic.jovan@icloud.com
          </p> */}
        </div>

        <div className="flex justify-center items-center mt-8">
          <BusinessCard />
        </div>
      </div>
    </section>
  );
};
