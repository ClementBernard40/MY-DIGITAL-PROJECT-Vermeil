import React from 'react';
import './topscreen.css';

function TopScreen() {
  return (
    <div className='mt-[100px]'>
      <div className="flex items-center">
        <div>
          <div className="ARCO text-darkgreen text-6xl 2xl:text-7xl 3xl:text-8xl w-[60%] 3xl:w-[50%] ml-[7vw] 2xl:ml-[10vw]">
            Transformez les repas en aventures délicieuses !
          </div>
          <div className="ml-[7vw] 2xl:ml-[10vw] mt-14 w text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:w-[40%] w-[500px]" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Aidez vos enfants à aimer manger sainement et en s'amusant ! 
          </div>
          <div className='w-[35%] flex justify-center items-center'> 
            <button className=" mt-14 px-10 py-2 rounded-full border-darkgreen bg-orangee hover:bg-darkgreen ml-[7vw] text-white 2xl:ml-[10vw]">
              <a href="#" className=" Rubik block text-center text-sm font-bold text-2xl 2xl:text-3xl 3xl:text-4xl " style={{ fontFamily: 'Rubik, sans-serif' }}>Découvrir</a>
            </button>
          </div>
        </div>
        <img src="/group33.png" alt="annie" className="w-[100%] 2xl:w-[40vw] ml-auto" />
      </div>

      <div className="relative">
        <img src="/yellow_bg.png" alt="" className="w-full mt-[100px] absolute top-0 left-0" />
        <div className="absolute top-44 md:w-[80%] 2xl:w-[47%] xl:w-[60%] lg:w-[70%] 3xl:w-[30%] mt-[100px] ARCO text-orangee text-6xl left-1/2 transform -translate-x-1/2 block text-center">
          Reconnaissez-vous ces situations ?
        </div>
        <img src="/flower.png" alt="fleur" className="absolute top-52 right-16" />
        <img src="/question.png" alt="fleur" className="absolute top-96 left-52" />
        <div className="absolute top-80 w-full mt-[100px] text-center">
          <div className="JMADH inline-block text-3xl transform -skewY-10" style={{ transform: 'skewY(-5deg)' }}>
            No stress! On est là pour vous aider
          </div>
        </div>
        <img src="/apple2.png" alt="" className="absolute left-24 w-[20%]" style={{ top: '500px' }} />
        <img src="/tomato2.png" alt="" className="absolute left-1/2 transform -translate-x-1/2 w-[20%]" style={{ top: '500px' }} />
        <img src="/bread2.png" alt="" className="absolute right-24 w-[20%]" style={{ top: '500px' }} />


      </div>

    </div>
  );
}

export default TopScreen;


