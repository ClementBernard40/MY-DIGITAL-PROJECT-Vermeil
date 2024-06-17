import React from "react";
import "./achat.css";
import { useNavigate } from "react-router-dom";

function Validation() {
  const goToValide = () => {
    navigate("/Valide");
  };
  setTimeout(() => {
    goToValide();
  }, 2000);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <img src="/sun2.png" alt="Menu" className="w-40 mx-auto" />
        <div className="text-lg text-darkgreen font-[Rubik-Regular] mt-4">
          Attente de la vérification ...
        </div>
        <div className="text-darkgreen font-[Rubik-Regular] opacity-80">
          Veuillez patienter, on est en train de vérifier votre paiement
        </div>
      </div>
    </div>
  );
}

export default Validation;
