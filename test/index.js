/*
A V A N T A G E S        J A V A S C R I P T
--- language dynamique | interactif | polyvalent | large communauté. ---
 */

/*
L E       R O L E       D ' U N E        C O N D I T I O N
--- permet d'éxécuter des bloques de code en fonction de l'etat de l'application actuelle. ---
 */

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
(4 === 4) && (5 != "5");              // false
(10 > 5) || (3 <= 2);                 // true
'!'(true && false);                     // true
(4 >= 4) && !(false || true);         // false
(7 >= 8) || !(false && true);         // true
(5 > 3) && (10 == 10);                // true
'!'(true || false) && (6 >= 6);         // false
(8 <= 4) || !(false && true);         // true
'!'((10 > 8) || (5 < 2));               // false
*/

/*
en utilisant la structure conditionnelle switch
ecrire un programme qui affiche le jour de la semaine en
fonction d'un nombre donné
si nombre - 0 afficher dimanche etc...
*/

// let nombre = 3;

// switch (nombre) {
//   case 0:
//     console.log("Dimanche");
//     break;
//   case 1:
//     console.log("Lundi");
//     break;
//   case 2:
//     console.log("Mardi");
//     break;
//   case 3:
//     console.log("Mercredi");
//     break;
//   case 4:
//     console.log("Jeudi");
//     break;
//   case 5:
//     console.log("Vendredi");
//     break;
//   case 6:
//     console.log("Samedi");
//     break;
//   default:
//     console.log("Numéro de jour invalide");
// }

/*
en utilisant le ternaire ecrire un programme
qui affiche adulte si l'age est superieur ou egal a 18
et mineur si age est inferieur a 18
*/

// let age = prompt("Quel est votre age ?");

// let statut = age >= 18 ? "adulte" : "mineur";

// console.log(statut);

/*
une annee bisextile est une
1 - annee divisible par 4 sans etre divisible par 100
soit :
2- divisible par 400
*/

// let annee = prompt("Mettez une année pour voir s'il est bissextile");

// if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
//   console.log(annee + " est une année bissextile.");
// } else {
//   console.log(annee + " n'est pas une année bissextile.");
// }

//  B R E A K

/*
exemple du break => arreter l'execution de la boucle si la variable i = 4

for (let i = 0; i < 10; i++){
  console.log(i); //affiche i
  if (i == 4) { // si i = 4
    break; // sortir de la boucle
  }
}
*/

/*
exemple du continue => on souhaite afficher que les nombres paires entre 0 et 10
*/
// pour les nombres pairs

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 != 0) { // verifie si "i" n'est pas un nombre pair
//     continue; // passe a l'iteration suivante
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// pour les nombres impairs

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) { // verifie si "i" est pas un nombre impair
//     continue; // passe a l'iteration suivante
//   }
//   console.log(i);
// }

/* L E S    T A B L E A U X */

/*
 D E F I N I T I O N     T A B L E A U
--- un tableau est une structure de données qui permet de stocker et d'organiser plusieurs valeurs dans une seule variable. ---
*/

// let tab = ["Alin", 45]; // on aura ["Alin", 45]
// console.log(tab);
// tab[3] = "2 rue de l'amour"; // on aura ["Alin", 45, "empty", "2 rue de l'amour"]
// on ajoute des numéros dans le tableau pour parler à un index précis
// vue que le tableau n'a pas d'index 2 et 3 met l'index 2 "empty" et l'index 3 avec la valeur precisé
// console.log(tab);
// tab.push("0678545855"); // on aura ["Alin", 45, "empty", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab.unshift("Johanne"); // on aura ["Alin", 45, "empty", "2 rue de l'amour", "0678545855", "Johanne"]
// console.log(tab);
// tab[3] = "future"; // on aura ["Alin", 45, "future", "2 rue de l'amour", "0678545855", "Johanne"]
// console.log(tab);
// delete tab[3]; // on aura ["Alin", 45, "empty", "2 rue de l'amour", "0678545855", "Johanne"]
// console.log(tab);
// tab = new Array(); // reinitialise un tableau
// console.log(tab);

// push ajoute des éléments a la fin d'un tableau  --- personnes[] = équivalent de personnes.push ---
// unshift ajoute des éléments au debut d'un tableau


/* N O U V E A U     T A B L E A U    S L I C E */

// let tableau = ["Cynthia", "Narcis", "Rahim", "Nawal", "Karima"];
// let index = tableau.indexOf("Cynthia");
// console.log(index); // il affiche 0
// let newTab = tableau.slice(0, 3); // il prends de 0 à 3 mais il ne prends pas le dérnier élément
// console.log(newTab); // ["Cynthia", "Narcis", "Rahim"]


/* N O U V E A U     T A B L E A U    S O R T */

// let tabNumber = [1, 8, 10, 5];
// console.log(tabNumber.sort()); // [1, 19, 5, 8]

// var nombres = [10, 5, 8, 2, 15];
// nombres.sort(function(a, b) {
// return a - b;  // a-b = plus petit au plus grand || b - a = plus grad au plus petit
// });
// console.log(nombres); // [2, 5, 8, 10, 15]


/* N O U V E A U     T A B L E A U    F I L L */

// let tab2 = [2, 7, 9, 8];
// tab2.fill("Alexis"); // ["Alexis", "Alexis", "Alexis", "Alexis",]
// console.log(tab2);
// tab2.fill("Michel", 1, 3); // ['Alexis', 'Michel', 'Michel', 'Alexis']
// console.log(tab2);


/* N O U V E A U     T A B L E A U    J O I N */

// let tab3 = ["Alexi", "Jérméy", "Michel", "Faïssal"];
// let str = tab3.join(', '); // "Alexi, Jérméy, Michel, Faïssal"
// console.log(str);



/* N O U V E A U     T A B L E A U    R E V E R S E */

// let tab3 = ["Alexi", "Jérméy", "Michel", "Faïssal"];
// let str = tab3.join(', '); // "Alexi, Jérméy, Michel, Faïssal"
// console.log(str);
// console.log(tab3.reverse()); // ['Faïssal', 'Michel', 'Jérméy', 'Alexi']


/* N O U V E A U     T A B L E A U    S P L I C E */

// let tab4 = [2, 5, 8];
// tab4.splice(1, 2); // [2], supprime le reste
// console.log(tab4);
// tab4.splice(2, 0, 'a', 'b'); // [2, 5, 'a', 'b', 8]
// console.log(tab4);

/* N O U V E A U     T A B L E A U    C O N C A T */

// let tab5 = [1, 2, 3];
// console.log(tab5);
// let tab6 = [4, 5, 6];
// console.log(tab6);
// let tab7 = tab5.concat(tab6); // [1, 2, 3, 4, 5, 6]
// console.log(tab7);


/* N O U V E A U     T A B L E A U    M A P */

// let tab8 = [1, 6, 8, 3];
// console.log(tab8);
// tab9 = tab8.map(e => e < 5); // [1,3]
// console.log(tab9);

// let tab8 = [1, 6, 8, 3];
// console.log(tab8);
// tab9 = tab8.map(e => e * 5); // [5, 30, 40, 15]
// console.log(tab9);

/*
--- Exercice ---
soit le tableau : ["Bannane", "Pomme", "Mangue"]
ajouter une "Fraise" entre "Pomme" et "Mangue"
supprimer la "Bannane"
remplacer "Fraise", "Mangue" et "Pomme" par "Goyave"
*/

// let tab = ["Bannane", "Pomme", "Mangue"];
// console.log(tab);
// tab.splice(2, 0, "Fraise");
// console.log(tab);
// tab.shift();
// console.log(tab);
// tab.fill("Goyave");
// console.log(tab);


/* L E S        F O N C T I O N S */

// function addition(a, b) {
//   let resultat = a + b;
  // return resultat;
// }

/*
function addition(a, b){
  return a + b;
}
*/

// let somme = addition(2, 5);
// let somme2 = addition(4, 7);
// console.log(somme);
// console.log(somme2);

// function direBonjourPrenom(prenom = "Anonyme") {
//   console.log("Bonjour,", prenom, "!");
// }
// if direBonjourPrenom(); is empty, it will take "Anonyme"
// direBonjourPrenom(); // Bonjour, Anonyme !

// direBonjourPrenom("Michel"); // Bonjour, Michel !


/*
--- Exercice ---
ecrire une fonction maxMin qui prend trois paramètres
les deux premiers sont des nombres (a et b)
le troisième un boolean (c)
par défaut le troisieme parametre (c = true)
● si le paramètre c = true la fonction retourne le maximum entre a et b
● si le paramètre c = false la fonction retourne le minimum entre a et b
exemple:
maxMin(2, 5, true) => 5
maxMin(2, 5, false) => 2
*/

// function maxMin(a, b, c = true) {
//   if (c) {
//     console.log("True. Retourne le maximum entre a et b.");
//     return Math.max(a, b);
//   } else {
//     console.log("False. Retourne le minimum entre a et b.");
//     return Math.min(a, b);
//   }
// }

// console.log(maxMin(5, 10, true));
// console.log(maxMin(5, 10, false));


/*
--- Corrigé ---
*/

// function maxMin(a, b, c = true) {
//   if (c == true) { // si "c" == true
//     if (a > b) { // so "a" > "b"
//       return a; // on returne "a"
//     } else { // sinon
//       return b; // on returne "b"
//     }
//   }
//   else { // si "c" == false
//     if (a < b) { // so "a" < "b"
//       return a; // on returne "a"
//     } else { // sinon
//       return b; // on returne "b"
//     }
//   }
// }
// let resultat = maxMin(3, 8, true);
// console.log(resultat);
// let result = maxMin(3, 8, false);
// console.log(result);

// on retourne "a" si ("c" == true et "a" > "b") ou ("c" = false et "a" < "b")
// on retourne "b" si ("c" == true et "a" < "b") ou ("c" = false et "a" > "b")
// function maxMin(a, b, c = true) {
//   if ((c == true && (a > b)) || ((c == false) && (a < b))) {
//     return a;
//   } else if ((c == true && (a < b)) || ((c == false) && (a > b))) {
//     return b;
//   }
// }
// let resultat = maxMin(3, 8, true); // result "a"
// console.log(resultat);
// let result = maxMin(3, 8, false); // result "b"
// console.log(result);


/*
--- Entrainer ---
*/

// let somme = 0; // la variable "somme" vaut "0" au départ

// for (let i = 1; i <= 100; i++) {
  // somme = somme + i;
  // somme += i;
// }
// console.log(somme);

/*
itération 1 :
somme = 0
i = 1
fin itération 1 :
somme = 1
i = 2
*/

/*
itération 2 :
somme = 1
i = 2
fin itération 2 :
somme = 3
i = 3
*/

/*
itération 3 :
somme = 3
i = 3
fin itération 3 :
somme = 6
i = 4
*/

/*
itération 4 :
somme = 6
i = 4
fin itération 4 :
somme = 10
i = 5
*/

/*
itération 5 :
somme = 10
i = 5
fin itération 5 :
somme = 15
i = 6
*/


/*
--- Entrainer ---
*/

// let num = 1;

// do {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// } while (num <= 20);


/*
--- Exercice n°2 ---
ecrire une fonction "sommeTab" qui prend en paramètre un tableau composé de nombres
la fonction doit retouner la somme des éléments du tableau
exemple :
sommeTab = ([1, 6 ,9]) => 16
*/

// function sommeTab(tableau) { // fonction sommeTab prend un paramétre
  // let somme = 0; // initialisation de la variable "somme" à "0"
  // let i = 0; // initialisation de la variable "i" à "0"
  // "0" correspond a la premiere position du tableau
  // while (i < tableau.length) { // tand que "i" est plus petit que la taille du tableau
    // somme = tableau[i] + somme; // on ajoute la valeur de la position a la position "i" du tableau a la variable "somme"
    // i++; // incrementer "i"
    // somme += tableau[i];
  // }
  // a la fin de laboucle on retourne la "somme"
  // return somme;
// }

// let tab = [1, 2, 8, 5, 6];
// let resultat2 = sommeTab(tab);
// console.log(resultat2); // => affiche 22

// eviter cette mauvaise maniere
// let resultat3 = sommeTab([1, 6, 9]); // => affiche 16
// console.log(resultat3);

// function maxTab(tableau) {
    // let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
    // for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau
        // if (max < tableau[i]) {  // si max est plus petit
            // on remplace la valeur de max par la valeur de la position i du tableau
            // max = tableau[i];
        // }
    // }
    // return max; // retourner max
// }



// let tab1 = [5, 8, 3, 0];
// let resultat3 = maxTab(tab1);
// console.log(resultat3); // affiche => 8

// function maxTab(tableau) {
  // let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
  // for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    // if (max < tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      // max = tableau[i];
    // }
  // }
  // return max; // retourner max
// }

// function minTab(tableau) {
  // let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
  // for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    // if (min > tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      // min = tableau[i];
    // }
  // }
  // return min; // retourner max
// }

// function maxMinTab(tableau, c) {
//   if (c == true) {
//     return maxTab(tableau);
//   } else {
//     return minTab(tableau);
//   }
// }

// const array = [1, 12, 3, 67, 1, 23, 0, 87];
// const array2 = [1, 1, 2, 3, 4, 5];
// const array3 = [0];
// const array4 = ['never gonna', 'give you', 'up'];
// const array5 = ['never gonna', 'let you', 'down'];



// function verifSortAsc(tableau) {
    // let estTrier = true; // par defaut on considere que le tableau est trie
    // let tab = []; // declare un tableau vide pour avoir une copy du tableau
    // for (let i = 0; i < tableau.length; i++){ //
        // remplir le tableau tab par les valeur du tableau tableau
        // tab.push(tableau[i]);
    // }
    // tab.sort(); // trier tab



    // for (let i = 0; i < tab.length; i++){ // pour i allant de 0 a taille du tableau
        // if (tab[i] == tableau[i]) { // si tab[i] == tableau[i]
            // estTrier = true;
        // } else { // sinon
            // estTrier = false;
            // break; // on sort de la boucle
        // }
    // }
    // return estTrier;
// }

// console.log(verifSortAsc(array5)); // =>


// function reverseWord(str) {
  // let tab = str.split(""); // conversion de la chaine de caractere en tableau
  // tab.reverse(); // inverser le tableau
  // let chaine = tab.join(""); // convertir le tableau en chaine de caractere
  // return chaine;
  // return str.split('').reverse().join('');
// }

// console.log(reverseWord("Hello World!"));


/* P R O G R A M M A T I O N           O B J E T */


/* --- Instancer ---
instancier = créer un objet
*/

// class Personne {
  // on appelle la fonction "constructor" avec 2 paramétres : "n" et "a"
  // constructor(n, a) {
    // this.nom = n; // on déclare une variable "nom" qui prend la valeur de "n"
    // this.age = a; // on déclare une variable "age" qui prend la valeur de "a"
  // }

  // saluer() { // la méthode "saluer" permet d'afficher la phrase : "Bonjour, je m'appelle (nom de l'objet) et j'ai (l'age de l'objet) ans"
    // console.log("Bonjour, je m'appelle " + this.nom + " et j'ai " + this.age + " ans.");
  // }
// }

// création des objets "p1" et "p2"
// let p1 = new Personne("Kira", 20); // "p1" s'appelle "Kira" et a 20 ans
// p1.age;
// pour récuperer l'age de "p1" faire la syntaxe : "p1.age"
// p1.nom;
// pour récuperer le nom de "p1" faire la syntaxe : "p1.nom"
// p1.saluer();
// pour appeller la méthode "saluer" sur un des objets faire : "p1.saluer();"

// let p2 = new Personne("Kenzo", 15); // "p2" s'appelle "Kenzo" et a 15 ans
// p2.age;
// pour récuperer l'age de "p2" faire la syntaxe : "p2.age"
// p2.nom;
// pour récuperer le nom de "p2" faire la syntaxe : "p2.nom"
// p2.saluer();
// pour appeller la méthode "saluer" sur un des objets faire : "p2.saluer();"


/* --- Exercice --- */

/*
Supposons que vous deviez modéliser une classe "Cercle" qui représente un cercle avec
la propriété "rayon" et les méthodes "calculerSurface();" qui calcule et retourne la
surface du cercle et "afficherInfo();" qui affiche les informations du cercle dans la
console.

Votre tache consiste à créer la classe "Cercle", instancer un objet "Cercle" et
appeler les méthodes calculerSurface(); et afficherInfo(); pour l'objet instancié.

Formule pour calculer la surface d'un cercle : PI multiplié par le rayon au caré PI
* (rayon * rayon)
*/

// class Cercle {
  // on déclare le "constructeur" de la classe qui prend un paramétre qui est "rayon"
//   constructor(rayon) {
//     this.rayon = rayon;
//   }
  // déclarer la méthode "calculerSurface"
//   calculerSurface() {
    // calculer la surface
//     let surface = Math.PI * Math.pow(this.rayon, 2);
//     return surface;
//   }
  // déclarer la méthode "afficherInfo"
//   afficherInfo() {
    // afficher les informations du cercle
//     console.log("Rayon du cercle : " + this.rayon);
//     console.log("Surface du cercle : " + this.calculerSurface());
    // "this.calculerSurface()" retourne la valeur "surface"

    // console.log("Surface du cercle : " + Math.ceil(this.calculerSurface()));
    // Math.ceil pour arrondir
//   }
// }
// let cercle = new Cercle(2); // instancier un objet "Cercle"
// cercle.afficherInfo();


/*
--- Exercice n°2 ---
Supposons que vous deviez modéliser une classe "CompteBancaire" qui représente un
compte bancaire avec les propriétés suivantes : "titulaire", "solde" et les méthodes
"déposer(montant)" qui permet de déposer de l'argent sur le compte,
"retirer(montant)"qui permet de retirer de l'argent du compte et
"afficherSolde()" qui affiche le solde
actuel du compte.

Votre tache consiste à créer la classe "CompteBancaire",
créer le "constructeur" avec les paramétres : "titulaire" et "solde"
créer les méthodes :
"deposer" : qui prend un paramétre pour ajouter de l'argent dans le compte
"retirer" : qui prend un paramétre pour retirer de l'argent du compte
"afficherSolde" : qui affiche le soldle du compte dans la console

Instancier un objet "CompteBancaire" avec comme titulaire : Kira et solde 5
appeller la méthode "ajouter" en lui passant la valeur 10
appeller la méthode "retirer" en lui passant la valeur 7
appeller la méthode "afficherSolde"
*/

// class CompteBancaire {
//   constructor(titulaire, solde) { // le "consructeur" prend 2 param: le titulaire => "titulaire" et "solde" => solde
//     this.titulaire = titulaire;
//     this.solde = solde;
//   }
  // déclarer les méthode "deposer", "retirer" et "afficherSolde"
//   deposer(montant) { // déposer prend un param : "montant"
//     let moreMoney = this.solde += montant;
//   }
//   retirer(montant) { // retirer prend un param : "montant"
//     let lessMoney = this.solde -= montant;
//   }
//   afficherSolde() {
//     console.log(this.solde + " €");
//   }
// }
// instancier un objet "CompteBancaire"
// let titulaire1 = new CompteBancaire("Kira", 5);
// titulaire1.afficherSolde();

// titulaire1.deposer(500);
// titulaire1.afficherSolde();
// titulaire1.retirer(20);
// titulaire1.afficherSolde();



/* F O N C T I O N S     A N O N Y M E S */

// ici on utilise une fonction traditionnelle
// function rappel() {
  // console.log("Ceci est une fonction de rappel");
// }
// setTimeout(rappel(), 2000);

// ici on utilise une fonction anonyme
// setTimeout(function () {
  // console.log("Ceci est une fonction de rappel");
// }, 2000);



/* F O N C T I O N S     F L E C H E E S */

// Fonction traditionnelle
// function addition(a, b) {
  // return a + b;
// }

// Fonction fléchée équivalente
// const additionFlechee = (a, b) => a + b;



/* M A N I P U L A T I O N      D U         D O M */


/**
* * this is light green
* ! this is red
* ? this is blue
* TODO this is orange
*/

//* this is light green
//! this is red
//? this is  blue
//TODO this is orange