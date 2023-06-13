var age = prompt("Indiquez votre âge : ");

while (age <= 3 || age >= 120 || isNaN(age)) {
  age = prompt("Indiquez votre âge : ");
}

var majoriteFR = 18;

afficheAge(age, majoriteFR);
