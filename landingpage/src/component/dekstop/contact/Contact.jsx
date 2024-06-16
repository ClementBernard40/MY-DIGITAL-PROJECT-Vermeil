import React from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const handlemlClick = () => {
    navigate("/mentionsLegales");
  };
  return (
    <section id="contact">
      <div className="static 3xl:mt-[570px] 2xl:mt-[450px] xl:mt-[500px] lg:mt-[500px] md:mt-[550px] text-white">
        .{" "}
      </div>
      <div className="relative">
        <div className="ARCO block text-center mt-36 text-darkgreen text-5xl 2xl:text-7xl 3xl:text-8xl xl:text-5xl w-[60%] 3xl:w-[50%] ml-auto mr-auto relative">
          contactez-nous pour plus d’informations
          <img src="/sun.png" alt="" className="absolute -top-12 -right-28" />
        </div>
      </div>

      <div className="flex mt-32 ">
        <div className="w-1/2 flex justify-center">
          <div className="w-96 h-32 flex-col justify-start items-start gap-9 inline-flex">
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="w-4 h-4">
                <img src="/clock.png" alt="" className="w-4 h-4" />
              </div>
              <div className="justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight">
                    Lundi/Vendredi 9:00-20:00
                    <br />
                    Samedi 10:00-16:00
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="w-3 h-4">
                <img src="/pin.png" alt="" className="w-3 h-4" />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight">
                  +33 07 45 26 78
                  <br />
                  chouchef@contact.com
                  <br />
                  12 Rue des Petits Champs, 75001 Paris, France
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="w-96 h-96 flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label
                htmlFor="prenom"
                className="w-24 h-6 text-lime-950 text-lg font-normal font-['Rubik'] leading-tight"
              >
                Prénom:
              </label>
              <input
                type="text"
                id="prenom"
                className="w-96 h-11 px-2.5 rounded-full border border-lime-950"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label
                htmlFor="email"
                className="w-24 h-6 text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-96 h-11 px-2.5 rounded-full border border-lime-950"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label
                htmlFor="message"
                className="w-24 h-6 text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="w-96 h-32 px-2.5 rounded-md border border-lime-950"
              />
            </div>
            <button
              type="submit"
              className="z-50 px-12 py-3 rounded-full border-darkgreen bg-darkgreen hover:bg-orangee text-white justify-center items-center gap-2.5 inline-flex"
            >
              <div className=" text-yellow-50 text-2xl font-bold font-['Rubik-Regular'] leading-normal">
                Envoyer
              </div>
            </button>
          </div>
        </div>
      </div>

      <footer className="relative mt-64">
        <img
          src="yellow_texture.png"
          alt=""
          className="absolute -z-50 -top-[500px] "
        />
        <img
          src="yellow_contact_shape.png"
          alt=""
          className="absolute h-72 z-10 w-full -top-40 "
        />

        <section className=" text-darkgreen self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full shrink-0 text-center text-lg text-dark-green font-bold-body-menu bg-yellow">
          <div className=" z-50 mb-16 w-[1257.8px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq1050:justify-center">
            <div className="w-[723.1px] flex flex-row items-start justify-start gap-[139.8px] max-w-full mq750:flex-wrap mq750:gap-[70px] mq450:gap-[35px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[65.8px] min-w-[255px] max-w-full mq450:gap-[33px]">
                <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7.5px] box-border max-w-full text-left text-5xl text-dark-green font-bold-body-menu">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] shrink-0 [debug_commit:1de1738] max-w-full z-[2] mq750:flex-1">
                    <b className="relative tracking-[-0.04em] leading-[100%] inline-block min-w-[121px] mq450:text-lgi mq450:leading-[19px]">
                      Navigation
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start text-lg">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="relative tracking-[-0.04em] leading-[110%] whitespace-pre-wrap">
                          <div className="flex">
                            <a href="#" className="mr-4">
                              À propos
                            </a>
                            <a href="#enfant" className="mr-4">
                              Pour enfants
                            </a>
                            <a href="#parent" className="mr-4">
                              Pour parents
                            </a>
                            <a href="#contact">Contact</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[102px] pl-0 gap-[20px]">
                      <a
                        href="https://www.instagram.com/chouchef.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-[26.7px] w-[25.6px] relative min-h-[27px]"
                          loading="lazy"
                          alt="Instagram"
                          src="/inst.png"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61558725495292"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-[27.2px] w-7 relative min-h-[27px]"
                          loading="lazy"
                          alt="Facebook"
                          src="/facebook.png"
                        />
                      </a>
                    </div>
                  </div>
                </section>
                <div className="w-[139px] relative tracking-[-0.04em] leading-[20px] inline-block shrink-0 [debug_commit:1de1738] z-[2]">
                  ©Chouchef, 2024
                </div>
              </div>
              <div className="h-44 w-[191.4px] flex flex-col items-end justify-start gap-[49.5px] min-w-[191.40000000000143px] mq750:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/logo2.png"
                />
                <section className="flex flex-row items-start justify-end py-0 pr-[25.6px] pl-[27px] text-center text-lg text-dark-green font-bold-body-menu">
                  <div className="relative tracking-[-0.04em] leading-[20px] whitespace-nowrap z-[2]">
                    All rights reserved
                  </div>
                </section>
              </div>
            </div>
            <div className="w-[246.6px] flex flex-col items-start justify-start gap-[57px] text-left text-13xl font-cherry-bomb">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <h2 className="m-0 self-stretch relative text-inherit uppercase font-normal ARCO font-inherit z-[2] mq750:text-7xl mq450:text-lgi">
                  Miam miam en s'amusant !
                </h2>

                <button type="submit" onClick={handlemlClick} className="mt-24">
                  Mentions légales
                </button>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </section>
  );
}

export default Contact;
