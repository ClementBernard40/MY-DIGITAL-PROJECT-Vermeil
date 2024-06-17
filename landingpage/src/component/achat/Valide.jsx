import React from "react";
import "./achat.css";
import { useNavigate } from "react-router-dom";

function Valide() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/#contact");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-5xl text-darkgreen font-[ARCO] mt-4 mb-32">
          Merci pour votre commande
        </div>
        <img src="/sun2.png" alt="Menu" className="w-40 mx-auto mb-32" />
        <div className="text-lg text-darkgreen font-[Rubik-Regular] mt-4 ">
          Votre Commande est confirmée.
        </div>
        <div className="text-darkgreen font-[Rubik-Regular] opacity-80">
          Verifier votre adresse email pour avoir le recapitulatif de votre
          commande et toutes les informations concernant la date de livraison.{" "}
        </div>
        <div className="mb-20">
          <button
            type="submit"
            onClick={goToHome}
            className="z-50 mt-10 px-16 py-3 rounded-full text-darkgreen  bg-lightgreen hover:bg-darkgreen hover:text-white "
          >
            <div className=" text-2xl font-bold font-['Rubik-Regular'] leading-normal">
              Retour a la page d'acceuil
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Valide;
