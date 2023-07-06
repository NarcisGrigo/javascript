// Fonction de calcul des prix HT et TTC
function calculatePrices() {
  let platPrices = {
    "thiebou dieune": 15,
    "salade de quinoa": 12,
    "sushi burger": 11,
    "filets de poulet panes": 9,
  };

  let dessertPrices = {
    "churros maison": 15,
    "biscuits au pepites": 12,
    "buche de noel": 11,
    "gateau au fromage": 9,
  };

  let selectedPlat = document.getElementById("menu").value;
  let selectedDessert = document.getElementById("dessert").value;

  let platPriceHT = platPrices[selectedPlat] || 0;
  let dessertPriceHT = dessertPrices[selectedDessert] || 0;

  let totalPriceHT = platPriceHT + dessertPriceHT;
  let tvaRate = 0.2;
  let totalPriceTTC = totalPriceHT * (1 + tvaRate);

  document.getElementById("prixHT").value = totalPriceHT.toFixed(2) + " €";
  document.getElementById("prixTTC").value = totalPriceTTC.toFixed(2) + " €";
  document.getElementById("total").value =
    (totalPriceHT + totalPriceTTC).toFixed(2) + " €";
}

document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let conditionsChecked = document.getElementById("conditions").checked;

    if (!conditionsChecked) {
      document.getElementById("conditions").classList.add("error");
      return;
    }

    // Réinitialiser la couleur du texte des conditions générales
    document.getElementById("conditions").classList.remove("error");

    // Clear previous prices
    document.getElementById("prixHT").value = "";
    document.getElementById("prixTTC").value = "";
    document.getElementById("total").value = "";

    // Calculer les prix HT et TTC
    calculatePrices();

    // Afficher le message de confirmation
    let resultElement = document.getElementById("result");
    resultElement.textContent = "Commande envoyée dans l'emplacement prévu";
  });
