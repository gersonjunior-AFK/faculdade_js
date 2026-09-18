//exercicio 1
function somar() {
let v1 = Number(document.getElementById("n1").value);
let v2 = Number(document.getElementById("n2").value);
let total = v1 + v2;
document.getElementById("resultado").innerText =
"Resultado: " + total;
}

//exercicio 2
function validar() {
let idade = Number(
document.getElementById("txtIdade").value
);
let h2 = document.getElementById("resultado");
if (idade >= 18) {
h2.innerText = "Classificação: Maior de Idade";
} else {
h2.innerText = "Classificação: Menor de Idade";
}
}

//exercicio 3
function converter() {
  const inputTexto = document.getElementById("numero1") || document.getElementById("txtPalavra");
  const texto = inputTexto.value;
  const caixaAlta = texto.toUpperCase();
  const tamanho = texto.length;

  document.getElementById("resultado").innerText = caixaAlta + " (" + tamanho + " letras)";
}