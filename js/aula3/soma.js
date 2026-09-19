// Exercício 1 - Soma de dois números
// document.getElementById busca os campos do HTML pelo id e lê os valores digitados.
function somar() {
  let v1 = Number(document.getElementById("n1").value);
  let v2 = Number(document.getElementById("n2").value);
  let total = v1 + v2;
  document.getElementById("resultado").innerText = "Resultado: " + total;
}

// Exercício 2 - Verificação de maioridade
// if/else decide entre duas saídas dependendo da idade informada.
function validar() {
  let idade = Number(document.getElementById("txtIdade").value);
  let h2 = document.getElementById("resultado");

  if (idade >= 18) {
    h2.innerText = "Classificação: Maior de Idade";
  } else {
    h2.innerText = "Classificação: Menor de Idade";
  }
}

// Exercício 3 - Conversão de texto
// toUpperCase transforma letras minúsculas em maiúsculas, e length conta a quantidade de caracteres.
function converter() {
  const inputTexto = document.getElementById("numero1") || document.getElementById("txtPalavra");
  const texto = inputTexto.value;
  const caixaAlta = texto.toUpperCase();
  const tamanho = texto.length;

  document.getElementById("resultado").innerText = caixaAlta + " (" + tamanho + " letras)";
}

// Exercício 4 - Consulta de turno
// switch analisa uma variável e escolhe um caso correspondente.
function consultar() {
  let opc = document.getElementById("txtTurno").value.trim().toUpperCase();
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

  document.getElementById("resultado").innerText = "Turno: " + resp;
}

// Exercício 5 - Contagem com while
// while repete a ação enquanto a condição for verdadeira.
function contar() {
  let limite = Number(document.getElementById("txtFim").value);
  let i = 1;
  let linha = "";

  while (i <= limite) {
    linha += i + " ";
    i++;
  }

  document.getElementById("resultado").innerText = "Sequência: " + linha;
}

// Exercício 6 - Soletração da palavra
// for percorre a string letra por letra e monta a saída em sequência.
function soletrar() {
  let termo = document.getElementById("txtTermo").value.toUpperCase();
  let resultado = "";

  for (let i = 0; i < termo.length; i++) {
    resultado += termo[i] + " ";
    if (i < termo.length - 1) {
      resultado += " ";
    }
  }

  document.getElementById("resultado").innerText = "soletrado: " + resultado;
}

// Atividade extra 1 - Calculadora do Dobro
// A fórmula do dobro é multiplicar o valor por 2 e mostrar o resultado.
function calcularDobro() {
  let numero = Number(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");

  resultado.innerText = "Dobro: " + numero * 2;
}

// Atividade extra 2 - Par ou Ímpar
// O operador % devolve o resto da divisão; se for 0, o número é par.
function verificarParImpar() {
  let numero = Number(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");

  if (numero % 2 === 0) {
    resultado.innerText = "Número Par";
  } else {
    resultado.innerText = "Número Ímpar";
  }
}

// Atividade extra 3 - Jogo da Palavra Secreta
// trim remove espaços extras e toLowerCase deixa tudo em minúsculas para comparação.
function verificarCapital() {
  let resposta = document.getElementById("resposta").value.trim().toLowerCase();
  let resultado = document.getElementById("resultado");

  if (resposta === "brasilia") {
    resultado.innerText = "Correta";
  } else {
    resultado.innerText = "Incorreta";
  }
}

// Atividade extra 4 - Tabuada com for
// for percorre de 1 até 10 e calcula o produto em cada repetição.
function mostrarTabuada() {
  let numero = Number(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");
  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto += numero + " x " + i + " = " + numero * i + "\n";
  }

  resultado.innerHTML = texto.replace(/\n/g, "<br>");
}


