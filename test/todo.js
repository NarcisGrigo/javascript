// pour recuperer le bouton
let btn = document.getElementById("add_todo");
// pour recuperer le input
let todo = document.getElementById("todo");
// // pour recuperer la div ou on va ajouter les todos
// let todoList = document.getElementById("todolist");

// // ecouter le click sur le bouton
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   // recuperer la valeur du input
//   let val = todo.value;
//   // creer un paragraphe
//   let p = document.createElement("p");
//   // ajouter le contenu du input dans le paragraphe
//   p.textContent = val;
//   // ajouter le paragraphe dans la div
//   todoList.appendChild(p);
//   // changer la couleur
//     p.addEventListener("click", () => {
//         p.style.color = "red";
//         p.style.fontSize = "10em";
//     //   if (p.style.color == "red") {
//     //       p.style.color = "blue";
//     //   } else {
//     //       p.style.color = "red";
//     // }
//   });
// });

$(document).ready(function () {
  // Get the button by id
  let btn = $("#add_todo");
  // Get the input by id
  let todo = $("#todo");
  // Get the div where we will add the todos
  let todoList = $("#todolist");

  // Listen to the click event on the button
  btn.on("click", function (e) {
    e.preventDefault();
    // Get the value of the input
    let val = todo.val();
    // Create a paragraph element
    let p = $("<>");
    // Set the text content of the paragraph
    p.text(val);
    // Append the paragraph to the div
    todoList.append(p);

    // Change the color on click
    p.on("click", function () {
      p.css("color", "red");
      p.css("font-size", "10em");
      // Uncomment the following lines if you want to toggle the color between red and blue
      if (p.css("color") == "rgb(255, 0, 0)") {
        p.css("color", "blue");
      } else {
        p.css("color", "red");
      }
    });
  });
});



// let nb1 = document.getElementById("nb1");
// let add = document.getElementById("add");
// let substract = document.getElementById("substract");
// let multiply = document.getElementById("multiply");
// let divide = document.getElementById("divide");
// let nb2 = document.getElementById("nb2");
// let equal = document.getElementById("equal");
// let result = document.getElementById("result");

// let calcul;

// add.addEventListener("click", () => {
//   calcul = "+";
// });
// substract.addEventListener("click", () => {
//   calcul = "-";
// });
// multiply.addEventListener("click", () => {
//   calcul = "*";
// });
// divide.addEventListener("click", () => {
//   calcul = "/";
// });

// equal.addEventListener("click", () => {
//   let number1 = parseInt(nb1.value);
//   let number2 = parseInt(nb2.value);
//   let resultat;

//   if (calcul == "+") {
//     resultat = number1 + number2;
//   } else if (calcul == "-") {
//     resultat = number1 - number2;
//   } else if (calcul == "*") {
//     resultat = number1 * number2;
//   } else if (calcul == "/") {
//     resultat = number1 / number2;
//   }
//   result.value = resultat;
// });
