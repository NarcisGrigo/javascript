var date_du_jour, jour_suivant;
date_du_jour = "mercredi";
jour_suivant = "jeudi";

// --- if et else--- //

// var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

// if (saisi_du_jour === date_du_jour){
//     console.log('<p>' +"Demain nous serons jeudi");
// }
// else {
//     console.log('<p>' +"Erreur sur la date du jour");
// }

// --- if et else if et else--- //

// var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

// if (saisi_du_jour === date_du_jour){
//     console.log('<p>' +"Demain nous serons jeudi");
// }
// else if (saisi_du_jour === jour_suivant){
//     console.log('<p>' +"Désolée, nous ne sommes pas encore jeudi");
// }
// else {
//     console.log('<p>' +"Erreur sur la date du jour ");
// }

// --- Switch --- //

// var jour_semaine = "mercredi";
var jour_semaine = prompt("Quel jour de la semaine sommes-nous?");
switch (jour_semaine) {
  case "lundi":
    console.log("<p>" + "Demain nous serons mardi");
    break;
  case "mardi":
    console.log("<p>" + "Demain nous serons mercredi");
    break;
  case "mercredi":
    console.log("<p>" + "Demain nous serons jeudi");
    break;
  case "jeudi":
    console.log("<p>" + "Demain nous serons vendredi");
    break;
  case "vendredi":
    console.log("<p>" + "Demain nous serons samedi");
    break;
  case "samedi":
    console.log("<p>" + "Demain nous serons dimanche");
    break;
  case "dimanche":
    console.log("<p>" + "Demain nous serons lundi");
    break;
}
