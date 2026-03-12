document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

const user = document.getElementById("user").value;
const pass = document.getElementById("pass").value;

console.log("Credenciales capturadas:");
console.log("Usuario:", user);
console.log("Contraseña:", pass);

document.getElementById("status").textContent =
"Error de autenticación. Intente nuevamente.";

});
