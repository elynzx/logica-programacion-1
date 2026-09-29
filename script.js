let numeros = [];

function pedirNumeros() {
  let num1 = Number(prompt("Ingresar el primer numero:"));
  let num2 = Number(prompt("Ingresar el segundo numero:"));
  let num3 = Number(prompt("Ingresar el tercer numero:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Los datos son incorrectos");
    return;
  }

  console.log("num1:", num1);
  console.log("num2:", num2);
  console.log("num3:", num3);

  let listaNumeros = document.getElementById("lista-numeros");
  listaNumeros.textContent = `${num1}, ${num2}, ${num3}.`;
  listaNumeros.style.color = "white";
}
