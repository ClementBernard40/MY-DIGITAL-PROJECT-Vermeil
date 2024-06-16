import React from 'react';
import './solludi.css';

function MobSolLudi() {
  return (
    <div>
      <div className="static wsm:mt-[2000px] xsm:mt-[1650px] sm:mt-[2500px] md:mt-[2700px] text-white">.</div>
      <div className="ml-auto mr-auto w-[85%]">
        <div className="block text-center ARCO text-darkgreen md:text-5xl sm:text-4xl text-3xl"> 
            La solution ludique et éducative pour des repas sains et <span className="relative inline-block">sans stress <img src="/oval2.png" alt="" className="absolute -top-2 w-[100%]" /> !</span>
        </div>
        <div className="relative flex flex-col items-center">
  <img src="/mascot.png" alt="annie" className='' />
  <div className="absolute -bottom-24 text-center">
    <div className="JMADH inline-block text-3xl w-[75%] block text-center text-darkgreen" style={{ transform: 'skewY(-5deg)' }}>
      Chouchou, la mascotte de chouchef
    </div>
  </div>
</div>

      </div>  

      <div>
        <img
          className="w-[100%] mt-40"
          loading="lazy"
          alt=""
          src="/green_texture.png"
        />
      </div>
    </div>
  );
}

export default MobSolLudi;
