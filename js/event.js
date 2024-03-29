import * as fen from './fenetre.js';

//Affiche le menu windows
const divWindows = document.getElementById("menu-demarrer");
divWindows.addEventListener("click", afficherMenu);

export function afficherMenu() {
  const menuWindows = document.getElementById("menu");
  if (menuWindows.style.display !== "none") {
    menuWindows.style.display = "none";
  } else {
    menuWindows.style.display = "flex";
  }
}

//Ouvre une fenêtre lors d'un click
const listeProgramme = document.getElementById("programme-cv");
const fenetres = listeProgramme.getElementsByTagName("li");

for (let i = 0; i < fenetres.length; i++) {
  fenetres[i].addEventListener("click", fen.ouvreFenetre);
}