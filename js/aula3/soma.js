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

//exercicio 4
function consultar() {
let opc = document.getElementById("txtTurno")
.value.trim().toUpperCase();
let resp = "";
switch (opc) {
case "M":
resp = "Matutino";
break;
case "V":
resp = "Vespertino";
break;
case "N":
resp = "Noturno";
break;
default:
resp = "Opção Inválida";
}
document.getElementById("resultado").innerText =
"Turno: " + resp;
}

//exercício 5

function contar() {
let limite = Number(
document.getElementById("txtFim").value
);
let i = 1;
let linha = "";
while (i <= limite) {
linha += i + " ";
i++;
}
document.getElementById("resultado").innerText =
"Sequência: " + linha;
}

//exercício 6
function soletrar() {
  let termo = document.getElementById("txtTermo").value.toUpperCase();
  let resultado = "";
  for (let i = 0; i < termo.length; i++){
    resultado += termo[i] + " ";
    if (i < termo.length - 1){
      resultado += " ";
    }
  }
  document.getElementById("resultado").innerText = "soletrado: " + resultado;
}

//atividade1

