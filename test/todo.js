// pour recuperer le bouton
let btn = document.getElementById("add_todo");
// pour recuperer le input
let todo = document.getElementById("todo");
// pour recuperer la div ou on va ajouter les todos
let todoList = document.getElementById("todolist");

// ecouter le click sur le bouton
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // recuperer la valeur du input
  let val = todo.value;
  // creer un paragraphe
  let p = document.createElement("p");
  // ajouter le contenu du input dans le paragraphe
  p.textContent = val;
  // ajouter le paragraphe dans la div
  todoList.appendChild(p);
  // changer la couleur
    p.addEventListener("click", () => {
        p.style.color = "red";
        p.style.fontSize = "10em";
    //   if (p.style.color == "red") {
    //       p.style.color = "blue";
    //   } else {
    //       p.style.color = "red";
    // }
  });
});


// Get references to the buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// Add event listeners to the buttons
addButton.addEventListener("click", performAddition);
subtractButton.addEventListener("click", performSubtraction);
multiplyButton.addEventListener("click", performMultiplication);
divideButton.addEventListener("click", performDivision);

// Define the arithmetic operations
function performAddition() {
  // Get input values from the user
  const operand1 = parseFloat(prompt("Enter the first number:"));
  const operand2 = parseFloat(prompt("Enter the second number:"));

  // Perform addition
  const result = operand1 + operand2;

  // Display the result
  alert(`Result: ${result}`);
}

function performSubtraction() {
  // Get input values from the user
  const operand1 = parseFloat(prompt("Enter the first number:"));
  const operand2 = parseFloat(prompt("Enter the second number:"));

  // Perform subtraction
  const result = operand1 - operand2;

  // Display the result
  alert(`Result: ${result}`);
}

function performMultiplication() {
  // Get input values from the user
  const operand1 = parseFloat(prompt("Enter the first number:"));
  const operand2 = parseFloat(prompt("Enter the second number:"));

  // Perform multiplication
  const result = operand1 * operand2;

  // Display the result
  alert(`Result: ${result}`);
}

function performDivision() {
  // Get input values from the user
  const operand1 = parseFloat(prompt("Enter the first number:"));
  const operand2 = parseFloat(prompt("Enter the second number:"));

  // Perform division
  const result = operand1 / operand2;

  // Display the result
  alert(`Result: ${result}`);
}
