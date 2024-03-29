import * as dateWindows from './date.js';
import * as event from './event.js';
import * as morpion from './morpion.js';

dateWindows.actualiseHeure();
setInterval(dateWindows.actualiseHeure,1000);

const menuWindows = document.getElementById("menu");
menuWindows.style.display = "none";

const jeuMorpion = document.getElementById('morpion');
jeuMorpion.addEventListener('click',morpion.ouvreMorpion);