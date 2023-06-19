var heure = prompt("Entrez l'heure");
var minute = prompt("Entrez les minutes");
var seconde = prompt("Entrez les secondes");

if (
  heure >= 0 &&
  heure <= 23 &&
  minute >= 0 &&
  minute <= 59 &&
  seconde >= 0 &&
  seconde <= 59
) {
  seconde++;
  if (seconde === 60) {
    seconde = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      heure++;
      if (heure === 24) {
        heure = 0;
      }
    }
  }
  document.write(
    "<h3>Dans une seconde il sera " +
      heure +
      " h " +
      minute +
      " m " +
      seconde +
      " s</h3>"
  );
} else {
  // heure incorrecte
  document.write("Heure incorrecte !");
}
