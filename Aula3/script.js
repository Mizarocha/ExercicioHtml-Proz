const elementoH2 = document.getElementById("h2");

console.log(elementoH2);

// Alterando a cor e o tamanho da fonte da h2

elementoH2.style.color = "#a0a0a0";
elementoH2.style.fontWeight = "500";
elementoH2.style.fontSize = "50px";

// Estilizando o botão
const elementoButton = document.querySelector("button");

console.log(elementoButton);

elementoButton.style.background = "#36f";
elementoButton.style.fontSize = "16px";
elementoButton.style.color = "#fff";
elementoButton.style.border = "1px solid #36f";
elementoButton.style.borderRadius = "5px";

// Pegar o input de usuário pelo id
let userNameInput = document.getElementById("login-usuario");
console.log(userNameInput);

// // Pegar o input de usuario usando o seleto css
// let userNameInput2 = document.querySelector("#login-usuario");
// console.log(userNameInput2);

// Adicionando a classe "erro" ao input do usuario
userNameInput.classList.add("error");

// adicionado o "Visible" no input do usuario
let errorText = document.querySelector(".error-text");
errorText.classList.add("visible");

// Adicionando a classe "correct" ao input da senha
const passwordInput = document.querySelector("#login-senha");
passwordInput.classList.add("correct");

// Remover a classe "error e visible" do input do usuário
userNameInput.classList.remove("error");
errorText.classList.remove("visible");
// Adicionando a classe "correct" ao input do usuário
userNameInput.classList.add("correct");

// Adicionar a classe "error" ao input da senha
passwordInput.classList.remove("correct");
passwordInput.classList.add("error");

// Adicionar a classe "visible" ao p da senha
var passwordErrorText = document.querySelectorAll(".error-text")[1];
console.log(passwordErrorText);
passwordErrorText.classList.add("visible");
