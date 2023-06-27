// let largeur = 2;
// let longueur = 4;
// let hauteur = 1;
// let volume = 0;

// volume = largeur * longueur * hauteur;
// console.log(volume);

/* if et else if et else */

// let age = prompt();

// if (age < 5) {
//   console.log("bébé");
// } else if (age >= 5 && age <= 10) {
//   console.log("enfant");
// } else if (age >= 11 && age <= 18) {
//   console.log("ado");
// } else {
//   console.log("vieux");
// }

/*
en utilisant la structure conditionnelle switch
ecrire un programme qui affiche le jour de la semaine en
fonction d'un nombre donné
si nombre - 0 afficher dimanche etc...
*/

let nombre = 3 ;

switch (nombre) {
  case 0:
    console.log("Dimanche");
    break;
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  default:
    console.log("Numéro de jour invalide");
}

/*
en utilisant le ternaire ecrire un programme
qui affiche adulte si l'age est superieur ou egal a 18
et mineur si age est inferieur a 18
*/

let age = prompt('Quel est votre age ?');

let statut = age >= 18 ? "adulte" : "mineur";

console.log(statut);

/*
une annee bisextile est une
1 - annee divisible par 4 sans etre divisible par 100
soit :
2- divisible par 400
*/

let annee = prompt("Mettez une année pour voir s'il est bissextile");

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
  console.log(annee + " est une année bissextile.");
} else {
  console.log(annee + " n'est pas une année bissextile.");
}