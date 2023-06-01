//alert("Hi");

/*---------
LA CONCATENATION
---------*/

// --- quand on as des chiffres la concantenation = addition --- \\

var annee = 2017; // à quoi sert une var, différents types de var
var futur = 3;
var calcul = annee + futur;
console.log("<p>" + calcul);
console.log("<p>" + calcul + "<br>"); // -> 2020 avec saut de ligne

var mois = "7";
var calcul2 = annee + mois;
console.log("<p>" + calcul2); // -> 20207<br>  parce que pas de calcul avec des strings
console.log("<p>" + calcul2 + "<br>");

var DebutPhrase = "Aujourd'hui ";
var NbStagiaires = 12;
var SuitePhrase = " stagiaires";
var FinPhrase = "sont présents."; // pas d'espace exprès

// -- Nous souhaitons afficher la phrase en un seul morceau avec la concaténation => à vos claviers !
console.log("<p>" + DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase);
// le " " est utile quand on a des données récupérées directement de l'utilisateur
