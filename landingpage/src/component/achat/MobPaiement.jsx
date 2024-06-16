import React, { useState } from "react";
import "./achat.css";
import { useNavigate } from "react-router-dom";

function MobPaiement() {
  const navigate = useNavigate();

  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [numeroCarte, setNumeroCarte] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const handlePayerClick = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/Validation");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFields = () => {
    const errors = {};

    if (!prenom || !email || !adresse || !numeroCarte || !expiration || !cvv) {
      errors.global = "Veuillez remplir tous les champs";
    }

    if (numeroCarte.length !== 16 || isNaN(numeroCarte)) {
      errors.numeroCarte =
        "Carte bancaire : nombre de caractères incorrecte : Veuillez entrer 16 chiffres";
    }

    const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationRegex.test(expiration)) {
      errors.expiration =
        "Date d’expiration : Format incorrect : vérifiez que vous avez bien renseigné le mois et l’année comme ceci 01/22 (mois/année)";
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
      errors.cvv =
        "Cryptogramme: Format incorrect : Veuillez entrer 3 chiffres";
    }

    return errors;
  };

  return (
    <div className="ysm:mx-20 mx-5 bg-[#FFFFF5]">
      <div className="w-[100%]">
        <div className="text-2xl text-darkgreen font-[Rubik-Regular] font-bold mt-10 border-b-2 ysm:mr-16 border-darkgreen mb-10 pb-6">
          Récapitulatif de la commande
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <img src="/menu.png" alt="Menu" className="w-12 h-12" />
              <div className="text-lg font-[Rubik-Regular] ml-5 text-darkgreen">
                Menu Chouchef
                <div className="w-[200px] font-[Rubik-Regular] opacity-50 text-sm">
                  Plateau interactif avec des cartes aliments
                </div>
              </div>
            </div>
            <div className="text-darkgreen font-[Rubik-Regular] text-lg mt-4 ml-auto ysm:mr-16">
              20€
              <div className="opacity-50">Qté : 1</div>
            </div>
          </div>
          <div className="flex flex-row justify-between ysm:mr-16 ">
            <div className="text-lg font-[Rubik-Regular] mt-10 text-darkgreen">
              Sous-total
            </div>
            <div className="text-lg font-[Rubik-Regular] mt-10 text-darkgreen">
              20€
            </div>
          </div>
          <div className="flex flex-row justify-between ysm:mr-16 border-b-2 pb-10 border-lightgreen">
            <div className="text-lg font-[Rubik-Regular] mt-10 text-darkgreen">
              Livraison
            </div>
            <div className="text-lg font-[Rubik-Regular] mt-10 text-darkgreen">
              5€
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between ysm:mr-16">
          <div className="text-3xl font-[Rubik-Regular] mt-10 text-darkgreen">
            Total
          </div>
          <div className="text-3xl font-[Rubik-Regular] mt-10 text-darkgreen">
            25€
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="text-2xl text-darkgreen font-[Rubik-Regular] border-b-2 font-bold mt-10 border-2-b-2 ysm:mr-16 border-darkgreen mb-10 pb-6">
          Livraison
        </div>
        <div>
          <div className="ysm:mr-16">
            {errors.global && (
              <div className="text-red-500">{errors.global}</div>
            )}
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
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-[100%] h-11 px-2.5 rounded-full border-2 border-darkgreen"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex mt-6">
              <label
                htmlFor="email"
                className="w-40 h-6 text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight"
              >
                Adresse email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] h-11 px-2.5 rounded-full border-2 border-darkgreen"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex mt-6">
              <label
                htmlFor="adresse"
                className="w-40 h-6 text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight"
              >
                Adresse postale:
              </label>
              <input
                type="text"
                id="adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="w-[100%] h-11 px-2.5 rounded-full border-2 border-darkgreen"
              />
            </div>
          </div>
        </div>
        <div className="text-2xl text-darkgreen font-bold mt-10 border-b-2 ysm:mr-16 border-darkgreen mb-10 pb-6">
          Paiement
        </div>
        <div>
          <div className="ysm:mr-16">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label
                htmlFor="numero"
                className="w-[50%] h-6 text-lime-950 text-lg font-normal font-['Rubik'] leading-tight"
              >
                Numéro de carte:
              </label>
              <input
                type="text"
                id="numero"
                value={numeroCarte}
                onChange={(e) => setNumeroCarte(e.target.value)}
                className="w-[100%] h-11 px-2.5 rounded-full border-2 border-darkgreen"
              />
              {errors.numeroCarte && (
                <div className="text-red-500">{errors.numeroCarte}</div>
              )}
            </div>

            <div className="flex flex-row w-[100%] space-x-4">
              <div className="flex-1 mt-6">
                <label
                  htmlFor="expiration"
                  className="w-[100%] h-6 text-darkgreen text-lg font-normal font-['Rubik-Regular'] leading-tight"
                >
                  Date d'expiration:
                </label>
                <input
                  type="text"
                  id="expiration"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  className="w-[100%] mt-2 h-11 px-2.5 rounded-full border-2 border-darkgreen"
                />
                {errors.expiration && (
                  <div className="text-red-500">{errors.expiration}</div>
                )}
              </div>
              <div className="flex-1 mt-6">
                <label
                  htmlFor="cvv"
                  className="w-[100%] h-6 text-lime-950 text-lg font-normal font-['Rubik-Regular'] leading-tight"
                >
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-[100%] h-11 mt-2 px-2.5 rounded-full border-2 border-darkgreen"
                />
                {errors.cvv && <div className="text-red-500">{errors.cvv}</div>}
              </div>
            </div>

            <div className="mb-20">
              <button
                type="submit"
                onClick={handlePayerClick}
                className="z-50 mt-10 px-12 py-3 rounded-full text-darkgreen bg-lightgreen hover:bg-darkgreen hover:text-white w-[100%] mb-20"
              >
                <div className="text-2xl font-bold font-['Rubik-Regular'] leading-normal">
                  Payer
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobPaiement;
