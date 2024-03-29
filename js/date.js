export function obtenirHeure(){
    const date  = new Date();
    let heures  = date.getHours();
    let minutes = date.getMinutes();

    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    return heures + ":" + minutes;
}

export function actualiseHeure(){
    const champHeure = document.getElementById('date');
    champHeure.innerText = obtenirHeure();
}