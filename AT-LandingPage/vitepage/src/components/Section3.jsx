import React from "react";

export const Section3 = () => {
  return (
    <section id="gipsani-radovi">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://molerajbeograd.rs/img/background.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold sm:text-4xl text-center lg:text-left">Gipsani radovi</h2>

            <p className="mt-4 ">
              Gipsarski radovi spadaju u moderne građevinske metode jer
              predstavljaju sistem koji se lako postavlja, sistem koji ima
              odlična svojstva i karakteristike a uz sve to treba napomenuti da
              troškovi izgradnje nisu previsoki. Osim što imaju dekorativan i
              estetski karakter gipsarski radovi u vidu pregradnih zidova i
              spuštenih plafona ne opterećuju statiku objekta i imaju dodatnu
              fukcionalnost jer se mogu koristiti za laku postavku različitih
              instalacija u objektu.
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
