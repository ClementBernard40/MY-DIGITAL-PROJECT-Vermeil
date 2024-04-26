import React from 'react';
import './topscreen.css';

function MidScreen() {
  return (
    <div>
    <div className="flex items-center mt-24">
    <img src="/cartes_enfants_block.png" alt="annie" className="w-[50vw] 2xl:w-[40vw] ml-[5vw] 2xl:ml-[7vw]" />
    <div className='ml-[10vw] mr-[10vw] 3xl:mr-[7vw] 2xl:mr-[7vw] xl:mr-[7vw] lg:mr-[7vw] lg:mr-[7vw]'>
        <div className="relative">
            <div className="ARCO text-pink text-6xl 2xl:text-7xl 3xl:text-8xl 3xl:w-[80%] 2xl:w-[100%] xl:w-[110%] lg:w-[30%]">
                cartes pour vos <span className="relative inline-block">enfant <img src="/line.png" alt="" className="absolute -bottom-3 w-[100%]" /> <img src="/line.png" alt="" className="absolute -bottom-5 w-[100%]" /> </span>
                
            </div>
            <div className="mt-14 text-darkgreen text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:w-[100%] 2xl:w-[85%] xl:w-[90%] lg:w-[100%]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. 
            </div>
            <div className='w-[35%] flex items-center'> 
                <div className=" mt-4 px-10 py-2 rounded-full bg-pink hover:bg-darkgreen text-white ">
                    <a href="#" className="block text-center text-sm font-bold text-4xl 2xl:text-4xl 3xl:text-6xl " style={{ fontFamily: 'Rubik, sans-serif' }}>Acheter</a>
                </div>
            </div>
        </div>
    </div>
</div>




        <div className="relative" style={{height: "35vw"}}>
        <img src="/pink_shape.png" alt="" className="w-full mt-[100px] absolute top-0 left-0" style={{height: "100vh"}} />
        <img src="/orangetexture.png" alt="" className='absolute right-0 -top-28 lg:w-[20%]'/>
        <div className='absolute left-16 top-2/4 w-[50%]'>

          <div className="ARCO text-white text-6xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl w-[90%] 3xl:w-[80%] ml-[7vw] 2xl:ml-[10vw]">
            liste de course pour <span className="relative inline-block">parents <img src="/line.png" alt="" className="absolute -bottom-3 w-[100%]" /> <img src="/line.png" alt="" className="absolute -bottom-5 w-[100%]" /> </span>
          </div>
          <div className="ml-[7vw] 2xl:ml-[10vw] mt-14 w md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:w-[70%] w-[80%]" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia distinctio aliquam quidem dolores ipsa provident blanditiis eveniet voluptatum, reprehenderit corrupti facilis, repellendus labore et, id odit? Reiciendis eveniet beatae aperiam.
          </div>
          <div className='w-[35%] flex items-center'> 
            <div className=" mt-14 px-10 py-2 rounded-full border-darkgreen bg-white hover:bg-darkgreen text-pink ml-[7vw] 2xl:ml-[10vw]">
              <a href="#" className="block text-center text-sm font-bold text-2xl 2xl:text-3xl 3xl:text-4xl " style={{ fontFamily: 'Rubik, sans-serif' }}>Tester</a>
            </div>
          </div>
        </div>
        <img src="/Group38.png" alt="" className="absolute right-16 top-2/4 md:top-3/4 w-[30%]" />


      </div>


    </div>
  );
}

export default MidScreen;

