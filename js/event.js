//Affiche le menu windows
const divWindows = document.getElementById('menu-demarrer')
divWindows.addEventListener('click', afficherMenu);

function afficherMenu() {
  const menuWindows = document.getElementById("menu");
  if (menuWindows.style.display !== "none") {
    menuWindows.style.display = "none";
  } else {
    menuWindows.style.display = "flex";
  }
}

//Ouvre une fenêtre lors d'un click
const listeProgramme = document.getElementById('programme-cv')
const fenetres = listeProgramme.getElementsByTagName('li');

for(let i = 0; i < fenetres.length; i++){
  fenetres[i].addEventListener('click',ouvreFenetre);
}

function ouvreFenetre(){

  let nomOnglet = this.children[1].textContent;
  
  // creerFenetre();

  //Création d'un onglet
  const onglet = document.createElement('div');
  const titreOnglet = document.createElement('p');
  const imageOnglet = document.createElement('img');

  const sourceImage = recupSourceImage(nomOnglet);
  imageOnglet.setAttribute('src',sourceImage);
  titreOnglet.innerText = nomOnglet;
  onglet.classList.add('onglet');

  onglet.appendChild(imageOnglet);
  onglet.appendChild(titreOnglet);

  const listeOnglet = document.getElementById('onglet');
  listeOnglet.appendChild(onglet);
}


function recupSourceImage(onglet){
  let sourceImage = "";
  switch (onglet){
    case `A Propos`:
      sourceImage = `/img/icon/profil.png`;
      break;
    case `Mon Parcours`:
      sourceImage = `/img/icon/destination.png`;
      break;
    case `Mes Expériences`:
      sourceImage = `/img/icon/mallette.png`;
      break;
    case `Mes Formations`:
      sourceImage = `/img/icon/programmation.png`;
      break;
    case `Mes Passions`:
      sourceImage = `/img/icon/passion.png`
      break;
  }
  return sourceImage;
}