import React from 'react';
import './topscreen.css';

function MobTopScreen() {
  return (
    <div>
      <div>
      <img src="/hero_image_mob.png" alt="annie" className="w-[70vw] ml-auto mr-auto" />
        <div className='w-[60%] ml-auto mr-auto'> 
          <div className="block text-center ARCO text-darkgreen md:text-5xl sm:text-4xl text-3xl">
            Transformez les repas en aventures délicieuses !
          </div>
          <div className="mt-6 text-2xl block text-center text-darkgreen md:text-3xl sm:text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Aidez vos enfants à aimer manger sainement et en s'amusant ! 
          </div>
          <div className='w-[35%] flex justify-center items-center ml-auto mr-auto'> 
            <div className="mt-6 px-10 py-2 rounded-full border-darkgreen bg-orangee hover:bg-darkgreen text-white ">
              <a href="#" className="block text-center text-sm font-bold text-2xl 2xl:text-3xl 3xl:text-4xl " style={{ fontFamily: 'Rubik, sans-serif' }}>Découvrir</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/yellow_bg_mobile.png" alt="" className="w-full mt-[100px] absolute top-0 left-0 md:h-[300vw] sm:h-[315vw] mdxl:h-[265vw] smxl:h-[300vw] wsm:h-[350vw] ysm:h-[300vw]" />
        <div className="absolute top-44 md:w-[70%] xsm:text-4xl mt-[100px] ARCO text-orangee text-5xl left-1/2 transform -translate-x-1/2 block text-center">
          Reconnaissez-vous ces situations ?
        </div>
        <img src="/flower.png" alt="fleur" className="absolute top-24 right-6" />
        <img src="/question.png" alt="fleur" className="absolute top-24 left-6" />
        <div className="absolute top-80 w-full mt-[100px] text-center">
          <div className="JMADH inline-block text-3xl transform -skewY-10" style={{ transform: 'skewY(-5deg)' }}>
            No stress! On est là pour vous aider
          </div>
        </div>

        <img src="/apple2.png" alt="" className="absolute left-1/2 transform -translate-x-1/2 w-[75%] top-[500px]" style={{ marginTop: '10vw' }} />
        <img src="/tomato2.png" alt="" className="absolute left-1/2 transform -translate-x-1/2 w-[75%] top-[800px] wsm:mt-[35vw] mt-[15vw] sm:mt-[50vw]" />
        <img src="/bread2.png" alt="" className="absolute left-1/2 transform -translate-x-1/2 w-[75%] top-[1100px] wsm:mt-[55vw] mt-[15vw] sm:mt-[90vw]" />


      </div>

    </div>
  );
}

export default MobTopScreen;


