import * as evenement from './event.js';
export function ouvreFenetre() {
    let nomOnglet = this.children[1].textContent;
  
    creerFenetre(nomOnglet);
  
    //Création d'un onglet
    const onglet      = document.createElement("div");
    const titreOnglet = document.createElement("p");
    const imageOnglet = document.createElement("img");
  
    const sourceImage = recupSourceImage(nomOnglet);
  
    imageOnglet.setAttribute("src", sourceImage);
    titreOnglet.innerText = nomOnglet;
    onglet.classList.add("onglet");
  
    onglet.appendChild(imageOnglet);
    onglet.appendChild(titreOnglet);
  
    const listeOnglet = document.getElementById("onglet");
    listeOnglet.appendChild(onglet);

    evenement.afficherMenu();
  }
  
  function recupSourceImage(onglet) {
    let sourceImage = "";
    switch (onglet) {
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
        sourceImage = `/img/icon/passion.png`;
        break;
    }
    return sourceImage;
  }
  
  function creerFenetre(nomOnglet) {
    const fenetre = document.createElement(`div`);
    const topFenetre = bandeauTopFenetre(nomOnglet);
  
    fenetre.appendChild(topFenetre);
    fenetre.classList.add(`fenetre`);
    fenetre.setAttribute(`id`,`fentest`);
  
    document.body.appendChild(fenetre);
  }
  
  function bandeauTopFenetre(nomOnglet) {
    const topFenetre = document.createElement(`div`);
    topFenetre.classList.add(`top-fenetre`);
  
    const divTitre = document.createElement(`div`);
    const divMenuFenetre = document.createElement(`div`);
  
    // Titre Fenetre
    const titre = document.createElement(`h3`);
    const imageFen = document.createElement(`img`);
    const srcImage = recupSourceImage(nomOnglet);
    imageFen.setAttribute(`src`, srcImage);
  
    titre.innerText = nomOnglet;
    titre.classList.add(`titre-top-fenetre`);
  
    divTitre.classList.add(`titre`);
  
    divTitre.appendChild(imageFen);
    divTitre.appendChild(titre);
  
    //gestion fenetre
  
    //img fermutre
    const imgAgrandir = document.createElement(`img`);
    imgAgrandir.setAttribute(`src`, `/img/fenetre/agrandir.png`);
    const imgFerme = document.createElement(`img`);
    imgFerme.setAttribute(`src`, `/img/fenetre/close.png`);
  
    imgFerme.addEventListener("click", fermeFenetre);
    imgAgrandir.addEventListener("click", agrandirFenetre);
  
    divMenuFenetre.classList.add(`gestion-fenetre`);
    divMenuFenetre.appendChild(imgAgrandir);
    divMenuFenetre.appendChild(imgFerme);
  
    topFenetre.appendChild(divTitre);
    topFenetre.appendChild(divMenuFenetre);
  
    return topFenetre;
  }
  
  function fermeFenetre() {
    const topFenetre = this.parentNode.parentNode;
    const titreFenetre = topFenetre.childNodes[0].innerText;
    const onglet = document.getElementById(`onglet`);

    for (let i = 0; i < onglet.childNodes.length; i++) {
      if (onglet.childNodes[i].innerText === titreFenetre) {
        onglet.childNodes[i].remove();
        break;
      }
    }
    this.parentNode.parentNode.parentNode.remove();
  }
  
  function agrandirFenetre() {
    const fenetre = this.parentNode.parentNode.parentNode;
    const largeurFenInitiale = fenetre.offsetWidth * 0.5;
    if (fenetre.offsetWidth * 0.5 <= largeurFenInitiale) {
      fenetre.style.top = `0%`;
      fenetre.style.left = `0%`;
      fenetre.style.width = `100%`;
      fenetre.style.height = `95%`;
    } else {
      fenetre.style.top = `15%`;
      fenetre.style.left = `25%`;
      fenetre.style.width = `50%`;
      fenetre.style.height = `70%`;
    }
  }