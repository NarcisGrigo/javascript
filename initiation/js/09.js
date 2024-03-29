//Créer un tableau
// var arr = new Array(element0, element1, ..., elementN);
// var arr = Array(element0, element1, ..., elementN);
// var arr = [element0, element1, ..., elementN];
// array = tableau
var fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

//Accéder(via son index) à un élément du tableau
var first = fruits[0];
// Apple
var last = fruits[fruits.length - 1];
// Banana

//Boucler sur un tableau
var couleurs = ["rouge", "vert", "bleu"];
// for = boucle
for (var i = 0; i < couleurs.length; i++) {
  console.log(couleurs[i]);
  console.log("<p>" + couleurs[i] + "</p>");
}

//Affichage à partir du dernier élément
var couleurs = ["rouge", "vert", "bleu"];
for (var w = 2; w >= 0; w--) {
  console.log(couleurs[w]);
  console.log("<p>" + couleurs[w] + "</p>");
}

var k = 0; /*déclaration et affectation*/
while (k < couleurs.length) {
  /*condition*/ console.log("<p>" + couleurs[k] + "</p>"); /*éxécution*/
  k++; /*incrémentation*/
}

// AU LIEU DE CREER UN NOUVEAU TABLEAU ON MODIFIE LE TABLEAU INITIAL (ajouter un élément à la fin du tableau a l'aide de la fonction push qui prends en parametre un élément et qui retourne la nouvelle taille du talbeau)
console.log(fruits.length);
//Ajouter à la fin du tableau
// la syntaxe suivante fait 2 opérations à la fois(meme temps), (1- Elle éxécute la fonction "push"), (2- Elle récupère la valeur de retour de la fonction "push" dans la variable "newLength")
// Il faut préciser que la fonction "push" prend un paramètre ou (argument) et cette fonction a une valeur de retour, car on peut affecter cette valeur dans une variable (ici c'est la variable "newLength")
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

for (var i = 0; i > fruits.length; i++) {
  console.log("<p>" + fruits[i] + "</p>");
}
console.log(
  "<p> La valeur de retour de la fonction push " + newLength + "</p>"
);

console.log(fruits);
console.log(newLength);

//Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

var lastElement = fruits.pop();

console.log(
  "Tableau fruits après avoir supprimé le dernier élement : " + fruits
);
console.log("La taille finale du tableau : " + fruits.length);
console.log(typeof fruits);
console.log("La valeur du dernier élement supprimé : " + lastElement);

//Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//Ajouter au début du tableau
var newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];
console.log("<p> Premier newLength : </p>" + newLength);

console.log("<p> Premier Mango : </p>" + fruits.push('Mango'));
console.log("<p> Premier Mango : </p>" + fruits);

console.log("<p> Deuxième newLength : </p>" + newLength);

// ["Strawberry", "Banana", "Mango"]
console.log("<p> Premier newLength : </p>" + newLength);

console.log("<p> Premier Mango : </p>" + fruits.push('Mango')); // chaque fois quand on appelle une fonction il l'éxécute (du coup il ajoute encore une fois mango, maintenant on a 2x mango)
console.log("<p> Premier Mango : </p>" + fruits);
// Créer un tableau
//Trouver l'index d'un élément dans le tableau
var pos = fruits.indexOf("Banana");
// 1

//Supprimer un élément par son index
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
// ["Strawberry", "Mango"]

//Supprimer des éléments à partir d'un index
var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1,
  n = 2;
var removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

//Copier un tableau
var shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]

var alerts = alert("param");

console.log(alerts);