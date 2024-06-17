import React from "react";
import "./topscreen.css";
import { useNavigate } from "react-router-dom";

function MidScreen() {
  const navigate = useNavigate();

  const handleAcheterClick = () => {
    navigate("/achat");
  };
  return (
    <div>
      <div className="flex items-center mt-24">
        <img
          src="/cartes enfants block.png"
          alt="annie"
          className="w-[50vw] 2xl:w-[40vw] ml-[5vw] 2xl:ml-[7vw]"
        />
        <div className="ml-[10vw] mr-[10vw] 3xl:mr-[7vw] 2xl:mr-[7vw] xl:mr-[7vw] lg:mr-[7vw] lg:mr-[7vw]">
          <div className="relative">
            <div className="ARCO text-darkgreen text-6xl 2xl:text-7xl 3xl:text-8xl 3xl:w-[80%] 2xl:w-[100%] xl:w-[110%] lg:w-[30%]">
              cartes pour vos
              <span className="relative inline-block">
                enfants
                <img
                  src="/line.png"
                  alt=""
                  className="absolute -bottom-3 w-[100%]"
                />
                <img
                  src="/line.png"
                  alt=""
                  className="absolute -bottom-5 w-[100%]"
                />
              </span>
            </div>
            <div
              className="mt-14 text-darkgreen text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:w-[100%] 2xl:w-[85%] xl:w-[90%] lg:w-[100%]"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              Les enfants pourront s'amuser avec des cartes colorées
              représentant différents aliments, les aidant à créer des repas
              équilibrés et à apprendre l'importance d'une alimentation variée
              et saine.
            </div>
            <div className="w-[35%] flex items-center">
              <button
                onClick={handleAcheterClick}
                className="mt-4 px-12 py-3 rounded-full bg-lightgreen hover:bg-darkgreen text-darkgreen hover:text-white"
              >
                <span
                  className="block text-center font-bold text-2xl 2xl:text-3xl 3xl:text-3xl "
                  style={{ fontFamily: "Rubik, sans-serif" }}
                >
                  Acheter
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="parent" className="relative" style={{ height: "35vw" }}>
        <img
          src="/pink_shape.png"
          alt=""
          className="w-full mt-[100px] absolute top-0 left-0  xl:h-[60vw] md:h-[75vw] sm:h-[80vw]"
        />
        <img
          src="/orangetexture.png"
          alt=""
          className="absolute right-0 -top-28 lg:w-[20%]"
        />
        <div className="absolute left-16 top-2/4 w-[50%]">
          <div className="ARCO text-white text-6xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl w-[90%] 3xl:w-[80%] ml-[7vw] 2xl:ml-[10vw]">
            liste de course pour
            <span className="relative inline-block">
              parents
              <img
                src="/line.png"
                alt=""
                className="absolute -bottom-3 w-[100%]"
              />
              <img
                src="/line.png"
                alt=""
                className="absolute -bottom-5 w-[100%]"
              />
            </span>
          </div>
          <div
            className="ml-[7vw] text-white 2xl:ml-[10vw] mt-14 w md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:w-[70%] w-[80%]"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            L'application mobile gratuite simplifie la vie des parents en leur
            fournissant instantanément une liste de courses complète, basée sur
            les repas sélectionnés par leurs enfants. Plus besoin de se creuser
            la tête, les courses sont organisées en un clin d'œil !
          </div>
          <div className="w-[35%] flex items-center">
            <div className=" mt-14 px-10 py-2 rounded-full border-darkgreen bg-lightgreen hover:bg-white hover:text-lightgreen text-white ml-[7vw] 2xl:ml-[10vw]">
              <a
                href="#"
                className="block text-center font-bold text-2xl 2xl:text-3xl 3xl:text-3xl "
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                Tester
              </a>
            </div>
          </div>
        </div>
        <img
          src="/app.png"
          alt=""
          className="absolute right-16 top-[20%] md:top-[40%] w-[35%]"
        />
      </section>
    </div>
  );
}

export default MidScreen;
