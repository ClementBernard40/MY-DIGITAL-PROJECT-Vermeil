import React from 'react';
import './solludi.css';

function SolLudi() {
  return (
    <div>
      <div className="static 2xl:mt-[1350px] 3xl:mt-[1700px] xl:mt-[1100px] lg:mt-[900px] md:mt-[750px] "></div>
      <div className="flex items-center">
        <div className="ARCO text-darkgreen text-6xl 2xl:text-7xl 3xl:text-8xl w-[60%] 3xl:w-[50%] ml-[7vw] 2xl:ml-[10vw]"> 
            La solution ludique et éducative pour des repas sains et <span className="relative inline-block">sans stress <img src="/oval2.png" alt="" className="absolute -top-2 w-[100%]" /> !<img src="star.png" alt="" className="absolute top-0 left-[100%] ml-2 mt-2" style={{ top: 'calc(100%)' }} /></span>
        </div>
        <div className="relative ml-[7vw]">
          <img src="/mascot.png" alt="annie" />
          <div className="absolute -bottom-24">
            <div className="JMADH inline-block text-3xl w-[100%] block text-center" style={{ transform: 'skewY(-5deg)' }}>
              Chouchou, la mascotte de chouchef
            </div>
          </div>
        </div>
      </div>  

      <section id="enfant">
        <img
          className="w-[100%] mt-40"
          loading="lazy"
          alt=""
          src="/green_texture.png"
        />
      </section>
    </div>
  );
}

export default SolLudi;
