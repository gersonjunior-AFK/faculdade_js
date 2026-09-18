function situacaoAluno() {
  const nota1 = Number(prompt("Digite a primeira nota:"));
  const nota2 = Number(prompt("Digite a segunda nota:"));
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    alert(`Média: ${media.toFixed(2)} - Aprovado`);
  } else if (media >= 5) {
    alert(`Média: ${media.toFixed(2)} - Recuperação`);
  } else {
    alert(`Média: ${media.toFixed(2)} - Reprovado`);
  }
}

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

function classificarIMC() {
  const peso = Number(prompt("Digite o peso em kg:"));
  const altura = Number(prompt("Digite a altura em metros:"));
  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    alert(`IMC: ${imc.toFixed(2)} - Abaixo do peso.`);
  } else if (imc < 25) {
    alert(`IMC: ${imc.toFixed(2)} - Peso normal.`);
  } else {
    alert(`IMC: ${imc.toFixed(2)} - Sobrepeso.`);
  }
}

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

function obterValores() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);

  return { numero1, numero2 };
}

function mostrarResultado(operacao, resultado) {
  const textoResultado = document.getElementById("resultado");
  textoResultado.textContent = `Resultado da ${operacao}: ${resultado}`;
}

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
