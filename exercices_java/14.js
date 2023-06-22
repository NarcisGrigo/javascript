var nombre = 0; // Valeur initiale permettant d'entrer dans la boucle
while (nombre < 50 || nombre > 100) {
  nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));
  document.write("Vous avez choisi " + nombre);
}

// premier methode sans inverse ne fonctionne pas?
// var nombre = parseInt(prompt("Entrer un nombre entre 50 et 100 :"));
// while (nombre >= 50 && nombre <= 100) {
//     alert("le nombre : " + nombre + " que Vous avez saisie  est compris entre 50 et 100");
//     nombre = prompt("Entrer un nombre entre 50 et 100 :");
// }
// // deuxieme methode avec l'inverse ne fonctionne pas?
// while (nombre < 50 || nombre > 100) {
//     alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
//     nombre = prompt("Entrer un nombre entre 50 et 100 :");
// }
// troisieme methode avec boucle while et dedans if else ne fonctionne pas?
// while (nombre != 'quitter') {
//     if (nombre >= 50 && nombre <= 100) {
//         alert("le nombre : " + nombre + " que Vous avez saisie  est compris entre 50 et 100");
//         nombre = prompt("Entrer un nombre  'quitter' pour quitter");
//     }
//     else if (nombre < 50 || nombre > 100) {
//         alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
//         nombre = prompt("Entrer un nombre  'quitter' pour quitter");
//     }
//     else {
//         alert("Erreure entrer un nombre correcte");
//     }
// }

// var number = 0;
// while ((number < 50) || (number > 100)) {
//   number = Number(prompt("Entrez un nombre superieur a 50 mais inferieur a 100"));
//   console.log("Votre nombre est " + number);
// }

var number = 0;
while ((number >= 50) && (number <= 100)) {
  number = Number(
    prompt("Entrez un nombre superieur a 50 mais inferieur a 100")
  );
  console.log("Votre nombre est " + number);
}
