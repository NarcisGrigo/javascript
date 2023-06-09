// var Prenom = "Narcis";   //  string  \\
//////////////////////////////////////////////////////////////////////////
// var monNumero = 69;   //  numérique / number  \\
//////////////////////////////////////////////////////////////////////////
// var monNum = "420";   //  string  \\
//////////////////////////////////////////////////////////////////////////
//  var nom = Kira;   //  faux (n'existe pas)  \\
//////////////////////////////////////////////////////////////////////////
// var booleanFalse = false;  //  boolean  \\
// var booleanTrue = true;  //  boolean  \\
//////////////////////////////////////////////////////////////////////////
// var varNull = null;  //  null  \\
//////////////////////////////////////////////////////////////////////////
// console.log (Prenom);  // permet l'affichage d'une variable dans la console \\
//////////////////////////////////////////////////////////////////////////
// alert (Prenom);
// alert ("Mon prénom est : Narcis");
// window.alert ("Super, tu es arrivé sur mon site !");   // --- window.alert ou alert pour afficher une boite d'alerte --- \\
//////////////////////////////////////////////////////////////////////////
// console.log ("A la pause vous aurez des Haribos Pik !");   // --- console.log pour afficher le texte dans la page web --- \\
//////////////////////////////////////////////////////////////////////////
// prompt ("Question: on est quel jour ?", "jour de la semaine");   // --- window.prompt ou prompt pour afficher une boite de dialogue ou on peut écrire et afficher nos données --- \\
//var jour = prompt ();   // --- affiche un formulaire , vide parce-que on a pas donné une valeur --- \\
//console.log (jour);   // --- affiche le texte stockée dans la variable donnée sur la page web --- \\
//////////////////////////////////////////////////////////////////////////
// var unBooleen = false;
// console.log (unBooleen);
// unBooleen = "true";   // --- la derniere surcharge la premiere --- \\
// console.log (unBooleen);
// console.log (typeof unBooleen);
//////////////////////////////////////////////////////////////////////////
// const PAYS = "France";
// PAYS = "Italie"   // --- On déclare uneseule fois --- \\
// console.log (PAYS);
//////////////////////////////////////////////////////////////////////////
// var unChiffre = "69.420724";
// console.log (unChiffre);
// console.log (typeof unChiffre);
/////////////////////////////////////////////////////////////////////////
// STRING => NUMBER
// monChiffre = parseInt (unChiffre);   // --- coupe tout ce qui est après la virgule du coup 69.420=69 --- \\  // --- transforme un string en nombre/number ---\\
// console.log (monChiffre);
// console.log (typeof monChiffre);
//////////////////////////////////////////////////////////////////////////
// STRING => FLOAT
// unChiffre = parseFloat (unChiffre);   // --- transforme un nombre/number entier/integer en nombre decimal --- \\
// console.log (unChiffre);
// console.log (typeof unChiffre);
//////////////////////////////////////////////////////////////////////////
// NUMBER => STRING
// var nb_en_lettres = 258;
// console.log (nb_en_lettres);
// console.log (typeof nb_en_lettres);
//////////////////////////////////////////////////////////////////////////
// var nb_en_lettres = nb_en_lettres.toString ();   // --- transforme un nombre en string et affecte le résultat sur la variable elle meme --- \\
// console.log (nb_en_lettres);
// console.log (typeof nb_en_lettres);

// --- FONCTIONS --- \\

/*  Différents types de fonctions :
1 - une fonction avec au moins un paramètre sans valeur de retour
2 - une fonction avec au moins un paramètre avec une valeur de retour
3 - une fonction sans paramètres avec une valeur de retour
4 - une fonction sans paramètres et sans une valeur de retour */

// --- parenthèses = fonction --- \\  // --- ce qui est dans les parenthèses sont des paramètres --- \\

// --- EXERCICES --- \\

// var prenom = prompt ("Narcis");
// alert (prenom);
// console.log (prenom);
// console.log (prenom);

//////////////////////////////////////////////////////////////////////////

// 1.	Affichage d’une boite de dialogue avec une case de formulaire vide
// 2.	Déclarer une variable nb1
// 3.	Affecter le contenu du formulaire dans cette variable
// 4.	Saisir un entier dans le formulaire (sachant que quel que soit la valeur saisie dans le formulaire est de type string)
// 5.	Déclarer une variable qui s’appelle nb2 et affecter le chiffre 7 à cette variable
// 6.	Calculer le modulo de nb1 par nb2 et affecter le résultat dans la variable nommée (‘nb3’ ou ‘resultat’)
// 7.	Affichage du résultat sur la page web
// 8.	Affichage du résultat sur la console
// 9.	Affichage du résultat à partir d’une boîte de dialogue
// 10.	Additionner (‘nb3’ ou ‘resultat’) avec nb2 et stocker le dans (‘nb3’ ou ‘resultat’)

// --- EXERCICES --- \\

// var nb1 = prompt  ("Sasir un entier dans le formulaire");
// console.log(nb1);
// nb1 = parseInt(nb1);
// console.log(typeof nb1);
// var nb2 = 7;
// console.log(nb2);
// console.log(typeof nb2);
// var resultat = nb1 % nb2;
// resultat = resultat.toString ();
// console.log(resultat);
// console.log(typeof resultat);
// alert(resultat);
// console.log(resultat + " ");
// resultat += nb2;
// console.log(resultat); 16

// --- FONCTIONS --- \\

// if (true) {
/* par défaut la condition à vérifier le IF vérifie si elle est vraie */
/* ... code ... */
// }

// var nb1 = 10;
// if (nb1 < 50) {
//   console.log("nb1 est bien inférieur à 50");
// }

// if (true) {
/* ... code si VRAI ... */
// } else {
/* ... code si FAUX ... */
// }
//-- elese if = si "if" n'est pas true et que "else if" est true -- \\

// var nb1 = 10;
// if (nb1 > 50) {
//   console.log("nb1 est bien supérieur à 50");
// } else {
//   console.log("nb1 n'est pas supérieur à 50");
//}

// var nb1 = 10;
// if (nb1 > 50) {
//   console.log("nb1 est bien supérieur à 50");
// } else if (nb1 == 50) {
//    console.log("Je suis dans else if")
// } else {
//   console.log("Je suis dans else");  -- sinon, si "if" n'est pas true et que "else if " n'est pas true non plus -- \\
// }
// console.log ("Je suis sortie de la condition"); -- dans tous les cas js va executer l'(es)opération(s) suivante(s) -- \\

// --- EXERCICES --- \\

// var ht = prompt();
// resultat = ht;  //prix hors taxes
// console.log(resultat+ " = prix hors tva");
// var tva = ht * 0.2;
// resultat = ht * 0.2; //pris apres tva
// console.log(resultat + " = prix apres tva");
// resultat = ht + tva;
// var ttc = ht + tva;
// resultat = ht + tva; //prix ttc (tout taux compris)
// console.log(resultat + " = prix ttc");
// console.log(typeof ttc);

// --- CORRECTION --- \\

// var nb1 = prompt();
// console.log(typeof nb1);
// /* isNaN(); --- si n'est pas une valeur numerique */
// if (isNaN(nb1)) {
//    console.log("on ne prends pas en compte les string");
//    console.log('on ne prends pas en compte les string');
// } else {
//    var nb2 = 5;
//    console.log(nb1);
//    var nb3 = ((nb1 / nb2) + nb1);
//    console.log(nb3);
//    console.log("<br>" + "le prix avec tva et " + nb3);
// }

// var prenom = "Kira ";
// var unChiffre = 12;
// if ( isNaN(prenom)) {
//    console.log(prenom);
// } else {
//    console.log(unChiffre);
// }

// var ht = prompt();
// console.log(ht + " = prix hors tva");
// if (isNaN(ht)) {
//    console.log(ht);
// } else {
//    var tva = ht * 0.2;
//    console.log(tva + " = prix apres tva");
//    var ttc = ht + tva;
//    console.log(ttc + " = prix ttc");
// }
// ctrl+h = raccourci pour changer un mot avec un autre (fruits2=panier)

//  tableau indexé
// var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(typeof fruits);

//  tableau associatif (on peut utiliser plusieurs tableaux indexés dans un tableau associatif)
// var panier = {
//     0: 'Apple',
//     1: 'Banana',
//     'troisiemeFruit': 'orange'
// };

// var prenom = ["Nawal","Wassila","Rahim","Jérémy","Narcis","Karima","Faissal","Alin","Oliver","Cynthia","Alexis","Michel","Mitra",
// ];
// console.log(fruits.length);
// accéder (via son index) à un élément du tableau
// console.log(prenom.length);
// var first = fruits[0];
// var second = panier[0];
// var third = panier['troisiemeFruit'];
// console.log(second);
// console.log("La valeur du troisième élément : " +
//     third);

// AU LIEU DE CREER UN NOUVEAU TABLEAU ON MODIFIE LE TABLEAU INITIAL
// console.log(fruits.length);
//Ajouter à la fin du tableau
// la syntaxe suivante fait 2 opérations à la fois(meme temps), (1- Elle éxécute la fonction "push"), (2- Elle récupère la valeur de retour de la fonction "push" dans la variable "newLength")
// Il faut préciser que la fonction "push" prend un paramètre ou (argument) et cette fonction a une valeur de retour, car on peut affecter cette valeur dans une variable (ici c'est la variable "newLength")
// var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

// for (var i = 0; i > fruits.length; i++) {
//   console.log("<p>" + fruits[i] + "</p>");
// }
// console.log(
//   "<p> La valeur de retour de la fonction push " + newLength + "</p>"
// );

// console.log(fruits);
// console.log(newLength);

/* var fruits = ["Apple", "Banana"];
document.write("Tableau fruits initial : " + fruits); */

/* Ajouter à la fin du tableau
var newLength = fruits.push("Orange", "Citron"); */

/* document.write("Tableau fruits ajout des deux éléments : " + fruits);
document.write(typeof fruits);
document.write(typeof newLength);
document.write(newLength); */

/* var lastElement = fruits.pop();

document.write(
  "Tableau fruits après avoir supprimé le dernier élement : " + fruits
);
document.write("La taille finale du tableau : " + fruits.length);
document.write(typeof lastElement);
document.write("La valeur du dernier élement supprimé : " + lastElement); */

/* Supprimer le premier élément du tableau
var firstElement = fruits.shift(); // supprime Apple (au début) */
// ["Banana"];
/* document.write('La valeur du premier élement supprimé : ' + firstElement);
document.write('Tableau fruits après avoir premier le dernier élement : ' + fruits); */

/* Ajouter au début du tableau
var newLength = fruits.unshift("Strawberry", "Cherry"); // ajoute au début */
// ["Strawberry", "Banana"];
/* document.write('<p>' + 'Tableau fruits après avoir supprimé le(s) premier(s) élément(s) : ' + fruits + '</p>');
document.write('<p>' + 'La nouvelle valeur après avoir ajouté le(s) premier(s) élément(s) : ' + newLength + '</p>');
fruits.push("Mango"); */

/* Créer un tableau
var pos = fruits.indexOf('Banana'); */
// 1
/* document.write('<p>' +'Tableau fruits après avoir supprimé le(s) premier(s) élément(s) : ' + fruits + '</p>');
document.write('<p>' + 'La valeur de retour de la fonction "indexOF"  : ' + pos + '</p>'); */

/* Supprimer un élément par son index
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos */
// ["Strawberry", "Mango"]
/* document.write('<p>' + 'Tableau fruits après aavoir suprimé le(s) élément(s) par la fonction "splice" : ' + fruits + '</p>');
document.write('<p>' + 'La valeur de retour de la fonction "indexOf" : ' + removedItem + '</p>'); */
// Les valeurs de retour sont les éléments supprimés en forme de tableau (array)

/* Supprimer des éléments à partir d'un index
var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables); */
// ["Cabbage", "Turnip", "Radish", "Carrot"]

/* var pos = 1,
  n = 2;
var removedItems = vegetables.splice(pos, n);
 n définit le nombre d'éléments à supprimer à partir de la position pos
console.log(vegetables);
 ["Cabbage", "Carrot"] (le tableau d'origine est changé)
console.log(removedItems);
 ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés) */

/* Copier un tableau
var shallowCopy = fruits.slice(); -- crée un nouveau tableau qui contient les éléments de fruits
 ["Strawberry", "Mango"] /*

/* var fruits2 = fruits;
document.write('<p>' + 'La valeur de retour de la fonction "slice" : ' + shallowCopy + 'qui est une copie du tableau "fruits" </p>');
console.log(shallowCopy);

var newValue = fruits.unshift("Melon", "Pear");
console.log(fruits);
console.log(shallowCopy);
console.log(fruits2); */

