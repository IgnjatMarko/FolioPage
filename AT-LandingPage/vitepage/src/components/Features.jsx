import React from "react";


export const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {/* Read trusted reviews from our customers */}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <a href="#molerski-radovi" className="flex items-center gap-4 cursor-pointer">
              <img
                alt=""
                src="/bucket.png"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500"></div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Molerski radovi
                </p>
              </div>
            </a>

            <p className="mt-4 text-gray-700">
              Pripremite i osvezite svoj životni prostor zanimljivim
              kombinacijama boja!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <a href="#dekorativni-radovi" className="flex items-center gap-4 cursor-pointer">
              <img
                alt=""
                src="/brush.png"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500"></div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Dekorativni radovi
                </p>
              </div>
            </a>

            <p className="mt-4 text-gray-700">
              Pogledajte koje sve dekorativne tehnike radimo i učinite vaš
              enterijer jedinstvenim!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <a href="#gipsani-radovi" className="flex items-center gap-4 cursor-pointer">
              <img
                alt=""
                src="/spatula.png"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500"></div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Gipsani radovi
                </p>
              </div>
            </a>

            <p className="mt-4 text-gray-700">
              Želite li da od jedne prostorije napravite dve? Mi ćemo Vam u tome
              pomoći.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
