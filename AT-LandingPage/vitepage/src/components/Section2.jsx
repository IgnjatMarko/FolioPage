import React from "react";

export const Section2 = () => {
  return (
    <section id="dekorativni-radovi">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
            <img
              alt=""
              src="https://molerajbeograd.rs/img/vintage-2.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold sm:text-4xl text-center lg:text-left">
              Dekorativni radovi
            </h2>

            <p className="mt-4  text-center lg:text-left">
              Velika je razlika između običnog krečenja i dekorativnih tehnika,
              tako da baš i ne preporučujemo sistem "uradite sami", ako Vam je
              skupo. Iza naših majstora stoje na hiljade urađenih kvadarata gore
              navedenih dekorativnih tehnika. Koristimo isključivo odgovarajući
              alat, namenjen striktno za špatulate, odgovarajuće hoble, spakle,
              četke, sunđere, gumene valjke, dekorativne tufere. Takođe vodimo
              racuna o materijalima i striktno gledamo da li su materijali
              odgovarajući za tehniku koju radimo.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 text-center lg:text-left"
            >
              Pozovite nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
