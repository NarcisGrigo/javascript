/* -_- *\ --- ____/-------\____ E X E R C I C E ____/-------\____ --- \* -_- */

/*

1 - Déclarer 2 variables de type tableau,
le premier : prenom
le deuxième adjectif

2 - à partir d'un formulaire, remplir le premier.
Tant que l'on saisi 12 prénoms, le formulaire s'affiche.
Idem pour le deuxième avec 12 adjectifs.

3 - Déclarer une fonction qui prend 2 paramètres de type tableau qui retourne un tableau.

*/

var prenom = [];
var prenomForm;
while (prenom.length <= 12) {
  // .lenght pour la taille du tableau et c'est une propriété (exemple : prenom.length)
  prenomForm = prompt("Saisir un prénom");
  prenom.push(prenomForm);
}
console.log(prenom);

var adjectif = [];
var adjectifForm;
while (adjectif.length <= 12) {
  adjectifForm = prompt("Saisir un adjectif");
  adjectif.push(adjectifForm);
}
console.log(adjectif);

function additions(num1, num2) {
  var resultat = num1 + num2;
  return resultat;
}

/* -_- *\ --- ____/-------\____ C O R R E C T I O N ____/-------\____ --- \* -_- */
