let numeros = [];
let listaNumeros = document.getElementById("lista-numeros");

function pedirNumeros() {
  numeros = [];
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

  listaNumeros.textContent = `${num1}, ${num2}, ${num3}`;

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
    return false;
  }
  return true;
}

function ordenarMayorMenor() {
  if (validarLista() === false) return;

  let copia = [...numeros];

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1; j++) {
      if (copia[j] < copia[j + 1]) {
        let temporal = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temporal;
      }
    }
  }

  listaNumeros.textContent = `${copia.join(", ")}`;
  console.log(`Lista mayor a menor: ${copia.join(", ")}`);
}

function ordenarMenorMayor() {
  if (validarLista() === false) return;

  let copia = [...numeros];

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1; j++) {
      if (copia[j] > copia[j + 1]) {
        let temporal = copia[j + 1];
        copia[j + 1] = copia[j];
        copia[j] = temporal;
      }
    }
  }
  listaNumeros.textContent = `${copia.join(", ")}`;
  console.log(`Lista menor a mayor: ${copia.join(", ")}`);
}
