//  random génére un nombre aleatoire  entre 0 fermé et 1 ouvert
// .floor enleve les decimales d'un nombre
//  fermé = inclus (0 fermé = 0 est inclus)

function fillArray(num) {
  var addElement = [];
  var elem;

  for (var i = 0; i < num; i++) {
    elem = prompt("Veuillez saisir une donnée :");
    addElement.push(elem);
  }

  console.log(addElement);
  return addElement;
}

var fruits = fillArray(3);
console.log(fruits);

/*

La fonction fillArray prend un entier num en paramètre.
Elle déclare une variable addElement de type tableau et une variable elem. Ensuite,
à l'aide d'une boucle for, une boîte de dialogue est utilisée pour saisir des données,
dont le nombre d'affichages dépend de la valeur de num. Les données saisies sont ensuite stockées dans le tableau addElement.
Enfin, le tableau addElement est renvoyé comme résultat de la fonction.

*/
