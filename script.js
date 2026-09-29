let numeros = [];
let listaNumeros = document.getElementById("lista-numeros");

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

  listaNumeros.textContent = `${num1}, ${num2}, ${num3}.`;

  numeros.push(num1, num2, num3);
  console.log(numeros);
}

function validarLista() {
  if (numeros.length === 0) {
    alert("Debe ingresar los numeros");
    return false;
  }

  if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
    listaNumeros.textContent = "Los numeros son iguales";
    console.log(numeros, "Son numeros iguales");
    numeros = [];
    return false;
  }
  return true;
}
