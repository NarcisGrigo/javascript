// Un programme en js :

// 1- Implanter une fonction qui s'appelle "affichagePrenoms2" qui prend successivement deux paramètres de type tableau(remplis de 12 prénoms) et string
// 2- La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la chaîne de caractère

// 3- nous allons afficher le résultat à partir de la console

// var developpeurs = [
//   "Alexis",

//   "Alin",

//   "Cynthia",

//   "Faïssal",

//   "Jérémy",

//   "Karima",

//   "Michel",

//   "Narcis",

//   "Nawal",

//   "Oliver",

//   "Rahim",

//   "Wassila",
// ];

// function affichagePrenoms2(paramArray, paramString) {
//Cela
//   var resultat = [paramArray, paramString, 156];
// Nous avons déclaré la variable resultat (ici le type tableau) qui contient les paramètres utilisés par la fonction "affichagePrenoms2" et nous envoyons cette variable grâce au mot clé "return"
//   return resultat;
//   Attention : on n'ajoute aucune syntaxe après la syntaxe "return", car elles ne seront pas executées(autrement dit elles ne seront pas prises en compte)
// }

// la syntaxe suivante fait deux opérations distinctes :
// 1 - Exécution de la fonction "affichagePrenoms2"
// 2- Stockage de la valeur de retour de notre fonction grâce au mot clé "return" utilisé à la fin de la fonction
// 3- Donc la variable "resultatDeLaFonction" a été créée afin de stocker la valeur de retour de notre fonction
// var resultatDeLaFonction = affichagePrenoms2(
//   developpeurs,
//     "Mes développeurs sont géniaux"
// );
// console.log(resultatDeLaFonction);

// var tabEnfant = ["Alexis", "Wassila"];
// les deux syntaxes suivantes sont identiques, avec unde différence significative: la première contient un tableau statique et la deuxième qui est bien appréciée contient un élément dynamique
//var tabFamille = [["Alexis", "Wassila"], "Mitra"];
// var tabParent = [tabEnfant, "Mitra"];

/* -_- *\ --- ____/-------\____ E X E R C I C E ____/-------\____ --- \* -_- */

// 1 - Déclarer une fonction "additionDesChiffres" qui prend  trois paramètres
// - premier de type number "paramNum"
// - deuxième de type string "paramString"
// - troisième de type tableau "paramArray"

function additionDesChiffres(paramNum, paramString, paramArray) {
    for (var i = 0; i < paramNum; i++) {
        paramArray.push(i);
    }
  var resultat;
  return resultat;
  // La fonction aura une valeur de retour            W wassila
}

// 2 - Grace à une boucle (le nombre de la condition dans la boucle vient du premier paramètre), la fonction "additionsDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle
