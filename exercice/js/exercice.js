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
// document.write ("A la pause vous aurez des Haribos Pik !");   // --- document.write pour afficher le texte dans la page web --- \\
                                                                   //////////////////////////////////////////////////////////////////////////
// prompt ("Question: on est quel jour ?", "jour de la semaine");   // --- window.prompt ou prompt pour afficher une boite de dialogue ou on peut écrire et afficher nos données --- \\
//var jour = prompt ();   // --- affiche un formulaire , vide parce-que on a pas donné une valeur --- \\
//document.write (jour);   // --- affiche le texte stockée dans la variable donnée sur la page web --- \\
                                                                   //////////////////////////////////////////////////////////////////////////
// var unBooleen = false;
// console.log (unBooleen);
// unBooleen = "true";   // --- la derniere surcharge la premiere --- \\
// console.log (unBooleen);
// console.log (typeof unBooleen);
                                                                   //////////////////////////////////////////////////////////////////////////
// const PAYS = "France";
// PAYS = "Italie"   // --- On déclare uneseule fois --- \\
// document.write (PAYS);
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
// document.write (prenom);

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
// document.write(resultat + " ");
// resultat += nb2;
// document.write(resultat); 16

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

