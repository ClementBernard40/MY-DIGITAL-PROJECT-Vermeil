import React from 'react';
import './topscreen.css';

function MobMidScreen() {
  return (
    <div>
    <section id="enfant" className=" mt-24">
    <img src="/group41.png" alt="annie" className="w-[80%] ml-auto mr-auto" />
    <div className='mt-10 ml-auto mr-auto w-[80%]'>
        <div className="relative ">
            <div className="block text-center ARCO text-pink md:text-5xl sm:text-4xl text-4xl">
                cartes pour vos <span className="relative inline-block">enfants <img src="/line.png" alt="" className="absolute -bottom-3 w-[100%]" /> <img src="/line.png" alt="" className="absolute -bottom-5 w-[100%]" /> </span>
                
            </div>
            <div className="mt-8 text-1xl block text-darkgreen md:text-3xl sm:text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. 
            </div>
            <div className='w-[35%] flex items-center'> 
                <div className=" mt-4 px-10 py-2 rounded-full bg-pink hover:bg-darkgreen text-white ">
                    <a href="#" className="block text-center text-sm font-bold text-4xl 2xl:text-4xl 3xl:text-6xl " style={{ fontFamily: 'Rubik, sans-serif' }}>Acheter</a>
                </div>
            </div>
        </div>
    </div>
</section>




        <section id="parent" className="relative " style={{height: "150vw"}}>
        <img src="/pink_bg_mob.png" alt="" className="w-full mt-[100px] absolute top-0 left-0 xsm:h-[120vh] wsm:h-[170vw] sm:h-[170vw] md:h-[170vw]"  />
        <img src="/orangetexture.png" alt="" className='absolute -right-16 -top-16 w-[60%]'/>
        <div className='absolute left-8 top-3/4 w-[80%]'>

          <div className="ARCO text-white md:text-5xl sm:text-4xl text-4xl  ">
            liste de course pour <span className="relative inline-block">parents <img src="/line.png" alt="" className="absolute -bottom-3 w-[100%]" /> <img src="/line.png" alt="" className="absolute -bottom-5 w-[100%]" /> </span>
          </div>
          <div className="mt-8 text-1xl block text-darkgreen md:text-3xl sm:text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>
          L'application mobile simplifie la vie des parents en leur fournissant instantanément une liste de courses complète, basée sur les repas sélectionnés par leurs enfants. Plus besoin de se creuser la tête, les courses sont organisées en un clin d'œil !
          </div>
          <div className='w-[35%] flex items-center'> 
            <div className=" mt-8 px-10 py-2 rounded-full border-darkgreen bg-white hover:bg-darkgreen text-pink ml-[7vw] 2xl:ml-[10vw]">
              <a href="#" className="block text-center text-sm font-bold text-2xl 2xl:text-3xl 3xl:text-4xl " style={{ fontFamily: 'Rubik, sans-serif' }}>Tester</a>
            </div>
          </div>
        </div>
        <img src="/Group38.png" alt="" className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[80%]" />


      </section>


    </div>
  );
}

export default MobMidScreen;


