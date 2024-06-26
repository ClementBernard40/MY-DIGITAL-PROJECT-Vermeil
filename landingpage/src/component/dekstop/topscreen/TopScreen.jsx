import React from "react";
import "./topscreen.css";

function TopScreen() {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col lg:flex-row items-center">
        <div>
          <div className="ARCO text-darkgreen text-6xl lg:text-7xl xl:text-8xl w-[60%] xl:w-[50%] ml-[7vw] xl:ml-[10vw]">
            Transformez les repas en aventures délicieuses !
          </div>
          <div
            className="ml-[7vw] xl:ml-[10vw] mt-14 text-2xl xl:text-3xl 2xl:text-4xl xl:w-[40%] w-[500px]"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Aidez vos enfants à aimer manger sainement et en s'amusant !
          </div>
          <div className="w-[35%] flex justify-center items-center"></div>
        </div>
        <img
          src="/group33.png"
          alt="annie"
          className="w-[100%] lg:w-[40vw] ml-auto"
        />
      </div>

      <div className="relative mt-[200px] ">
        <img
          src="/yellow_bg.png"
          alt=""
          className="xl:h-[60vw] lg:h-[70vw] md:h-[80vw] w-full absolute top-0 left-0"
        />
        <div className="absolute top-44 md:w-[80%] xl:w-[60%] lg:w-[70%] xl:w-[30%] ARCO text-darkgreen lg:text-6xl text-4xl left-1/2 transform -translate-x-1/2 block text-center">
          Reconnaissez-vous ces situations ?
        </div>
        <img
          src="/flower.png"
          alt="fleur"
          className="absolute top-52 right-16"
        />
        <img
          src="/question.png"
          alt="fleur"
          className="absolute top-96 left-52"
        />
        <div className="absolute lg:top-80 top-60 w-full text-center">
          <div
            className="JMADH inline-block text-3xl transform -skewY-10 text-darkgreen"
            style={{ transform: "skewY(-5deg)" }}
          >
            No stress! On est là pour vous aider
          </div>
        </div>
        <img
          src="/apple2.png"
          alt=""
          className="absolute left-32 w-[20%]"
          style={{ top: "500px" }}
        />
        <img
          src="/tomato2.png"
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 w-[20%]"
          style={{ top: "500px" }}
        />
        <img
          src="/bread2.png"
          alt=""
          className="absolute right-32 w-[20%]"
          style={{ top: "500px" }}
        />
      </div>
    </div>
  );
}

export default TopScreen;
