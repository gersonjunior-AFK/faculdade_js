// A função prompt() recebe um valor digitado pelo usuário para uso no programa.
function situacaoAluno() {
  const nota1 = Number(prompt("Digite a primeira nota:"));
  const nota2 = Number(prompt("Digite a segunda nota:"));
  const media = (nota1 + nota2) / 2;

  // O if/else if verifica as faixas de nota e decide a situação do aluno.
  if (media >= 7) {
    alert(`Média: ${media.toFixed(2)} - Aprovado`);
  } else if (media >= 5) {
    alert(`Média: ${media.toFixed(2)} - Recuperação`);
  } else {
    alert(`Média: ${media.toFixed(2)} - Reprovado`);
  }
}

// Aqui o programa avalia o valor da compra e aplica o desconto correto conforme a regra.
function calcularDesconto() {
  const valorCompra = Number(prompt("Digite o valor da compra:"));

  if (valorCompra > 500) {
    alert(`Valor final com desconto: ${(valorCompra * 0.8).toFixed(2)}`);
  } else if (valorCompra > 100) {
    alert(`Valor final com desconto: ${(valorCompra * 0.9).toFixed(2)}`);
  } else {
    alert(`Valor final: ${valorCompra.toFixed(2)}`);
  }
}

// O cálculo do IMC usa peso dividido pela altura ao quadrado, e a condição define a classificação.
function classificarIMC() {
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const resultadoCampo = document.getElementById("resultado");

  let peso = 0;
  let altura = 0;

  if (pesoInput && alturaInput && pesoInput.value !== "" && alturaInput.value !== "") {
    peso = Number(pesoInput.value);
    altura = Number(alturaInput.value);
  } else {
    peso = Number(prompt("Digite o peso em kg:"));
    altura = Number(prompt("Digite a altura em metros:"));
  }

  const imc = peso / (altura * altura);
  const mensagem = `IMC: ${imc.toFixed(2)} - ${
    imc < 18.5 ? "Abaixo do peso." : imc < 25 ? "Peso normal." : "Sobrepeso."
  }`;

  if (resultadoCampo) {
    resultadoCampo.textContent = mensagem;
  } else {
    alert(mensagem);
  }
}

// O switch seleciona um caso específico para cada número de 1 a 7 e usa default para valores inválidos.
function nomeDoDia() {
  const numero = Number(prompt("Digite um número de 1 a 7:"));

  switch (numero) {
    case 1:
      alert("Domingo");
      break;
    case 2:
      alert("Segunda-feira");
      break;
    case 3:
      alert("Terça-feira");
      break;
    case 4:
      alert("Quarta-feira");
      break;
    case 5:
      alert("Quinta-feira");
      break;
    case 6:
      alert("Sexta-feira");
      break;
    case 7:
      alert("Sábado");
      break;
    default:
      alert("Número inválido. Digite um valor de 1 a 7.");
      break;
  }
}

// getElementById busca um elemento do HTML pelo id e permite ler ou alterar o valor dele.
function obterValores() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);

  return { numero1, numero2 };
}

// A função mostrarResultado escreve o texto do cálculo dentro do elemento de resultado.
function mostrarResultado(operacao, resultado) {
  const textoResultado = document.getElementById("resultado");
  textoResultado.textContent = `Resultado da ${operacao}: ${resultado}`;
}

// Cada função de operação usa os valores lidos do formulário e aplica a operação matemática correspondente.
function somar() {
  const { numero1, numero2 } = obterValores();
  const resultado = numero1 + numero2;
  mostrarResultado("soma", resultado);
}

function subtrair() {
  const { numero1, numero2 } = obterValores();
  const resultado = numero1 - numero2;
  mostrarResultado("subtração", resultado);
}

function multiplicar() {
  const { numero1, numero2 } = obterValores();
  const resultado = numero1 * numero2;
  mostrarResultado("multiplicação", resultado);
}

function dividir() {
  const { numero1, numero2 } = obterValores();

  if (numero2 === 0) {
    const textoResultado = document.getElementById("resultado");
    textoResultado.textContent = "Não é possível dividir por zero.";
    return;
  }

  const resultado = numero1 / numero2;
  mostrarResultado("divisão", resultado);
}

// Funções auxiliares para os botões da página de calculadora.
function somarTabuada() {
  somar();
}

function subtrairTabuada() {
  subtrair();
}

function multiplicarTabuada() {
  multiplicar();
}

function dividirTabuada() {
  dividir();
}
