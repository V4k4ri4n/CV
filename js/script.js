import * as dateWindows from './date.js';
import * as event from './event.js';

const menuWindows = document.getElementById("menu");
menuWindows.style.display = "none";

function ouvreAPropos() {
  const fenetre = creerfenetre();
  document.body.appendChild(fenetre);
}

function creerfenetre() {
  const fenetre = document.createElement("div");
  fenetre.style.backgroundColor = "yellow";
  fenetre.style.width = "20rem";
  fenetre.style.height = "20rem";
  fenetre.style.alignSelf = "center";
  return fenetre;
}

