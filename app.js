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

inputR.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actulizarColor(rojo, verde, azul);
});

inputG.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actulizarColor(rojo, verde, azul);
});

inputB.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actulizarColor(rojo, verde, azul);
});
