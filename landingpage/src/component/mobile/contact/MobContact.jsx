import React from 'react';
import './contact.css';

function MobContact() {
  
  return (
    <section id='contact'>
      <div className="static wsm:mt-[400px] xsm:mt-[600px] sm:mt-[400px] md:mt-[400px] text-white"></div>
      <div className="relative ml-auto mr-auto">
        <div className="mt-14 block text-center ARCO text-darkgreen md:text-5xl sm:text-4xl text-3xl relative">
          contactez-nous pour plus d’informations
          <img src="/sun.png" alt="" className="absolute -top-24 right-8" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8 w-[90%] mx-auto">
        <div className="w-full md:w-1/2 flex justify-center mt-20">
          <div className="w-96 h-32 flex-col justify-start items-start gap-9 inline-flex">
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="w-4 h-4">
                <img src="/clock.png" alt="" className="w-4 h-4" />
              </div>
              <div className="justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-darkgreen text-lg font-normal font-['Rubik'] leading-tight">Lundi/Vendredi 9:00-20:00<br/>Samedi 10:00-16:00</div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="w-3 h-4">
                <img src="/pin.png" alt="" className="w-3 h-4" />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-darkgreen text-lg font-normal font-['Rubik'] leading-tight">+33 07 45 26 78<br/>chouchef@contact.com<br/>12 Rue des Petits Champs, 75001 Paris, France</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[90%] md:w-1/2 mt-20 flex "> 
          <div className="h-96 flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label htmlFor="prenom" className="md:w-24 h-6 text-darkgreen text-lg font-normal font-['Rubik'] leading-tight">Prénom:</label>
              <input type="text" id="prenom" className=" md:w-96 xsm:w-72 wsm:w-96 sm:w-[500px] h-11 rounded-full border border-darkgreen" />
            </div>
            <div className="flex-col justify-start gap-2.5 flex"> 
              <label htmlFor="email" className="md:w-24 h-6 text-darkgreen text-lg font-normal font-['Rubik'] leading-tight">Email:</label>
              <input type="email" id="email" className="md:w-96 xsm:w-72 wsm:w-96 sm:w-[500px] h-11 rounded-full border border-darkgreen" />
            </div>
            <div className="flex-col justify-start gap-2.5 flex"> 
              <label htmlFor="message" className="md:w-24 h-6 text-darkgreen text-lg font-normal font-['Rubik'] leading-tight">Message:</label>
              <textarea id="message" className="z-30 md:w-96 xsm:w-72 wsm:w-96 sm:w-[500px] h-32 rounded-md border border-darkgreen" />
            </div>
            <button type="submit" className="z-30 px-12 py-3 rounded-full border-darkgreen bg-darkgreen hover:bg-orangee text-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-yellow-50 text-2xl font-bold font-['Rubik'] leading-normal">Envoyer</div>
            </button>
          </div>
        </div>
      </div>

      <footer className="relative mt-64">
  <img src="yellow_footer_bg_mob.png" alt="" className='absolute h-72 -z-50 w-full -top-40 ' />
  <img src="yellow_texture_mob.png" alt="" className='absolute z-10 xsm:-top-80 wsm:-top-96 '/>
  <section className="text-darkgreen self-stretch flex flex-col items-center justify-center py-0 pr-5 pl-[22px] box-border max-w-full shrink-0 text-center text-lg text-dark-green font-bold-body-menu bg-yellow">
    <div className=" z-50 mb-16 flex flex-col items-center gap-[20px] mq1050:flex-wrap mq1050:justify-center">
      <div className="w-[191.4px] flex flex-col items-center justify-start gap-[40px] min-w-[191.40000000000143px]">
        <img
          className="relative z-[2]"
          alt=""
          src="/logo2.png"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[40px] text-center text-13xl font-cherry-bomb overflow-hidden">
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
          <h2 className="relative text-inherit uppercase font-normal ARCO font-inherit mq750:text-7xl mq450:text-lgi">
            Miam miam en s'amusant !
          </h2>
          <div className="relative text-lg tracking-[-0.04em] leading-[20px] font-bold-body-menu">
            Designed by @comme.kamila
          </div>
          
          
          <section className="self-stretch w-full max-w-full text-left text-1xl text-dark-green font-bold-body-menu">
  <div className="grid grid-cols-2 gap-5">
    <div>
      <div className="ml-10 relative inline-block">
        <a href='#'> À propos </a>  
      </div>
      <div className=" ml-10 relative tracking-[-0.04em] leading-[110%] mt-2">
        <a href='#enfant'>Pour enfants</a> 
      </div>
    </div>
    <div className='mt-2'>
      <div className="relative tracking-[-0.04em] leading-[110%] ">
        <a href='#parent'>Pour parents</a> 
      </div>
      <div className="relative tracking-[-0.04em] leading-[110%] mt-2">
        <a href='#contact'>Contact</a> 
      </div>
    </div>
  </div>
</section>

        <div className="flex flex-row items-start justify-start gap-[20px]">
              <a href="https://www.instagram.com/chouchef.fr/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-[26.7px] w-[25.6px] relative min-h-[27px]"
                  loading="lazy"
                  alt="Instagram"
                  src="/inst.png"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558725495292" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-[27.2px] w-7 relative min-h-[27px]"
                  loading="lazy"
                  alt="Facebook"
                  src="/facebook.png"
                />
              </a>
            </div>
          
          <div className="relative text-lg tracking-[-0.04em] leading-[20px] font-bold-body-menu">
            ©Chouchef, 2024
          </div>
        </div>
        <div className="relative text-lg tracking-[-0.04em] leading-[20px] font-bold-body-menu">
          All rights reserved
        </div>
        <div className="relative text-lg tracking-[-0.04em] leading-[20px] font-bold-body-menu">
          Projet étudiant de MDS Paris
        </div>
      </div>
    </div>
  </section>
</footer>


    </section>
  );
}

export default MobContact;
