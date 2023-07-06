// var nb_aleatoire = Math.floor(Math.random() * 51);
// //math.floor pour retourner un nombre entier , Math.random pour un nombre aleatoire entre 0 et 0,99
// console.log(nb_aleatoire);

// let solution = document.getElementById("solution");
// let reponse = document.getElementById("reponse");
// let boutonPropose = document.getElementById("propose");
// let proposition = document.getElementById("proposition");

// // en j querry
// // let solution= $("#solution");

// // addventlistener ecouteur d'evenement (click, change)
// solution.addEventListener("click", () => {
//   // Quand on clique sur solution , l'input "reponse" prend en valeur le nombre aléatoire (le nombre aléatoire est affiché dans l'input de la réponse)
//   reponse.value = nb_aleatoire;
//   boutonPropose.setAttribute("disabled", true);
//   proposition.setAttribute("disabled", true); //Une fois le bouton solution cliqué, le bouton proposer et l'input proposition prennent l'attribut disabled (On ne peut plus cliquer dessus)
// });

// let newGame = document.getElementById("newgame");
// let essai = document.getElementById("essai");
// let message = document.getElementById("message");

// newGame.addEventListener("click", () => {
//   proposition.removeAttribute("disabled", false);
//   boutonPropose.removeAttribute("disabled", false);
//   nb_aleatoire = Math.floor(Math.random() * 51);
//   console.log(nb_aleatoire);
//   reponse.value = "";
//   message.value = "";
//   essai.value = 1;
//   proposition.value = "";
// });
// boutonPropose.addEventListener("click", () => {
//   if (essai.value == 7) {
//     boutonPropose.setAttribute("disabled", true);
//     proposition.value = "";
//     message.value = "Game over";
//     reponse.value = nb_aleatoire;
//     proposition.setAttribute("disabled", true);
//   } else {
//     // Si la valeur de la proposition n'est pas vide ET est égale au bon nombre aléatoire , alors un message de félicitation apparaitra , et la réponse sera donnée
//     if (proposition.value != "" && proposition.value == nb_aleatoire) {
//       message.value = "Félicitation, tu as trouvé";
//       reponse.value = nb_aleatoire;
//       proposition.setAttribute("disabled", true);
//     } else if (proposition.value != "" && proposition.value < nb_aleatoire) {
//       message.value = "Le nombre est trop petit";
//       essai.value++;
//       proposition.value = "";
//     } else if (proposition.value != "" && proposition.value > nb_aleatoire) {
//       message.value = "Le nombre est trop grand";
//       essai.value++;
//       proposition.value = "";
//     }
//   }
// });


/**
 *! --- C O R R E C T I O N ---
 */

// créer une variable pour chaque "button"
let newGame = $("#newGame"); // le button "newGame"
let solution = $("#solution"); // le button "solution"
let propose = $("#propose"); // le button "propose"
let monForm = $("#monForm");

// le nombre d'essai
let nbEssai = 0;

// le nombre mystère
// let randomNumber = Math.floor(Math.random() * 51);
let randomNumber = generateRanomNumber();

// créer une "function" qui permet de génerer

// créer une variable pour chaque "input"
function generateRanomNumber() {
  return Math.floor(Math.random() * 51);
}

// ajouter des gestionnaire d'evenement sur les trois boutons

// le bouton "newGame" propose un noveau nombre mystère et remet le nombre d'essais à 0
newGame.on("click", () => {
  //TODO le code a remplir plus tard
  // randomNumber = Math.floor(Math.random() * 51);
  randomNumber = generateRanomNumber();
  nbEssai = 0;
  // "monForm" est considéré un tableau par jQuery
  monForm[0].reset();
  $("#");
  $("#proposition").attr("disabled", false);
  propose.attr("disabled", false);
});

// le bouton "solution" affiche le nombre mystère dans le input avec l'id "message"
solution.on("click", () => {
  //TODO code ici
  $("#message").val("Le nombre mystère est : " + randomNumber);
  $("#proposition").attr("disabled", true);
  propose.attr("disabled", true);
});

// le bouton "propose" avec un autre syntaxe
/*
le bouton "propose" :
1 - verifie si le nombre d'essai n'est pas atteint
    si le nombre d'essai n'est pas atteint
        increment le nombre d'essai
        recuperer la valeur proposée par l'utilisateur
        il compare avec le nombre mystère ("randomNumber")
            - si le nombre mystère est plus petit il affiche le méssage :
            "veuillez essayer avec un nombre plus grand"
            - si le nombre mystère est plus grand il affiche le méssage :
            "veuillez essayer avec un nombre plus petit"
            - sinon il affiche le message :
            "bravo vous l'avez !!"
        il affiche l'historique des propositions (séparées par un tiret) dans le input "reponses"
    si le nombre d'essai est égal à 7 on affiche "game over"
*/
propose.click(() => {
  //TODO code ici
  if (nbEssai < 7) {
    // si le nombre d'essai < 7
    if ($("#proposition").val() != "") {
      nbEssai++;
      $("#essai").val(nbEssai);
      let proposition = $("#proposition".val());
      if (proposition < randomNumber) {
        $("#message").val("veuillez essayer avec un nombre plus grand");
      } else if (proposition > randomNumber) {
        $("#message").val("veuillez essayer avec un nombre plus petit");
      } else {
        $("#message").val("bravo vous l'avez !!");
      }
      if ($("#reponse").val() == "") {
        $("#reponse").val(proposition);
      } else {
        $("#reponse").val($("#reponse").val() + "-" + proposition);
      }
      $("#proposition").val("");
    } else {
        $("#proposition").css({
            border: "solid 1px red"
        });
    }
  } else {
    $("#proposition").attr("disabled", true);
    propose.attr("disabled", true);
    $("#message").val("Game over !");
  }
});
