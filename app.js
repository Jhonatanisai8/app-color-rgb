const inputR = document.getElementById("rojo");
const inputG = document.getElementById("verde");
const inputB = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputR.value;
let verde = inputG.value;
let azul = inputB.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actulizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

