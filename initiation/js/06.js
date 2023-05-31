var date_du_jour, jour_suivant;
date_du_jour = "mercredi";
jour_suivant = "jeudi";



// --- if et else--- //

// var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

// if (saisi_du_jour === date_du_jour){
//     document.write("Demain nous serons jeudi");
// } 
// else {
//     document.write("Erreur sur la date du jour");
// }



// --- if et else if et else--- //

// var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

// if (saisi_du_jour === date_du_jour){
//     document.write("Demain nous serons jeudi");
// } 
// else if (saisi_du_jour === jour_suivant){
//     document.write("Désolée, nous ne sommes pas encore jeudi");
// }
// else {
//     document.write("Erreur sur la date du jour ");
// }



// --- Switch --- //

// var jour_semaine = "mercredi";
var jour_semaine = prompt("Quel jour de la semaine sommes-nous?");
switch(jour_semaine){
    case"lundi":
    document.write("Demain nous serons mardi");
    break;
    case"mardi":
    document.write("Demain nous serons mercredi");
    break;
    case"mercredi":
    document.write("Demain nous serons jeudi");
    break;
    case"jeudi":
    document.write("Demain nous serons vendredi");
    break;
    case"vendredi":
    document.write("Demain nous serons samedi");
    break;
    case"samedi":
    document.write("Demain nous serons dimanche");
    break;
    case"dimanche":
    document.write("Demain nous serons lundi");
    break;
}

