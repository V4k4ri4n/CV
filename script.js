const menuWindows = document.getElementById("menu");
menuWindows.style.display = "none";

// Fonction pour obtenir l'heure actuelle
function obtenirHeureActuelle() {
  const date = new Date();
  let heures = date.getHours();
  let minutes = date.getMinutes();

  // Ajoute un zéro devant les chiffres si nécessaire
  heures = heures < 10 ? "0" + heures : heures;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return heures + ":" + minutes;
}

// Mettre à jour l'heure toutes les minutes
function actualiserHeure() {
  const champHeure = document.getElementById("date-heure");
  champHeure.innerText = obtenirHeureActuelle();
}

// Actualiser l'heure immédiatement au chargement de la page
actualiserHeure();

// Actualiser l'heure toutes les minutes
setInterval(actualiserHeure, 60000); // 60000 millisecondes = 1 minute

//Affiche le menu windows
function afficherMenu() {
  const menuWindows = document.getElementById("menu");
  if (menuWindows.style.display !== "none") {
    menuWindows.style.display = "none";
  } else {
    menuWindows.style.display = "flex";
  }
}

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

const Apropos = document.getElementById("apropos");
Apropos.addEventListener("click", ouvreAPropos);
