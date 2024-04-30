import React, { useEffect } from 'react';

const ScrollBlocker = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      // Vérifie si le scroll horizontal est détecté
      if (window.scrollX !== 0) {
        // Empêche le scroll horizontal
        window.scrollTo(0, window.scrollX);
      }
    };

    // Ajoute un écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
};

export default ScrollBlocker;
