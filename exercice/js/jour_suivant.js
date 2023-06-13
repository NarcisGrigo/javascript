//  S W I T C H  \\

var tomorrow = prompt("Quel jour de la semaine sommes-nous?");
tomorrow = tomorrow.toLowerCase();
// while (Number(tomorrow)) {
// tomorrow = prompt ("Quel jour de la semaine sommes-nous?");
// }
switch (tomorrow) {
  case "lundi":
    console.log("Aujourd-hui nous sommes lundi");
    document.write("Demain nous serons mardi");
    break;
  case "mardi":
    console.log("Aujourd-hui nous sommes mardi");
    document.write("Demain nous serons mercredi");
    break;
  case "mercredi":
    console.log("Aujourd-hui nous sommes mercredi");
    document.write("Demain nous serons jeudi");
    break;
  case "jeudi":
    console.log("Aujourd-hui nous sommes jeudi");
    document.write("Demain nous serons vendredi");
    break;
  case "vendredi":
    console.log("Aujourd-hui nous sommes vendredi");
    document.write("Demain nous serons samedi");
    break;
  case "samedi":
    console.log("Aujourd-hui nous sommes samedi");
    document.write("Demain nous serons dimanche");
    break;
  case "dimanche":
    console.log("Aujourd-hui nous sommes dimanche");
    document.write("Demain nous serons lundi");
    break;
  default:
    document.write("Erreur sur la date du jour");
}

//  E L S E    I F  \\

// var tomorrow = prompt("Quel jour de la semaine sommes-nous?");
// while (Number(tomorrow)) {
//   tomorrow = prompt("Quel jour de la semaine sommes-nous?");
// }
// if (tomorrow == "lundi") {
//   document.write("Aujourd-hui nous sommes lundi");
//   document.write("Demain nous serons mardi");
// } else if (tomorrow == "mardi") {
//   document.write("Aujourd-hui nous sommes mardi");
//   document.write("Demain nous serons mercredi");
// } else if (tomorrow == "mercredi") {
//   document.write("Aujourd-hui nous sommes mercredi");
//   document.write("Demain nous serons jeudi");
// } else if (tomorrow == "jeudi") {
//   document.write("Aujourd-hui nous sommes jeudi");
//   document.write("Demain nous serons vendredi");
// } else if (tomorrow == "vendredi") {
//   document.write("Aujourd-hui nous sommes vendredi");
//   document.write("Demain nous serons samedi");
// } else if (tomorrow == "samedi") {
//   document.write("Aujourd-hui nous sommes samedi");
//   document.write("Demain nous serons dimanche");
// } else if (tomorrow == "dimanche") {
//   document.write("Aujourd-hui nous sommes dimanche");
//   document.write("Demain nous serons lundi");
// } else {
//   document.write("Erreur sur la date du jour");
// }
