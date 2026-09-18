// Exercício 1 - Par ou Ímpar
// A função prompt() abre uma caixa de diálogo para receber um valor digitado pelo usuário.
function cadastrar() {
  let num1 = Number(prompt("Digite um número:"));

  // O operador % calcula o resto da divisão. Se o resto for 0, o número é par.
  if (num1 % 2 == 0) {
    alert("seu numero e par:");
  } else {
    alert("seu numero e impar");
  }
}

// Exercício 2 - Maior de dois números
// O if/else if/else testa condições em ordem e executa a primeira que for verdadeira.
function maior() {
  let num1 = Number(prompt("Digite um número:"));
  let num2 = Number(prompt("Digite outro número:"));

  if (num1 > num2) {
    alert(`O maior numero e: ${num1}`);
  } else if (num2 > num1) {
    alert(`O maior numero e: ${num2}`);
  } else {
    alert("Os numeros sao iguais");
  }
}

// Exercício 3 - Pode votar?
// A estrutura if/else if organiza vários critérios para decidir o resultado final.
function verificaridade() {
  let idade = Number(prompt("Digite sua idade:"));

  if (idade >= 16) {
    alert("Voce pode votar");
  } else if (idade >= 18 && idade <= 70) {
    alert("Voce nao pode votar");
  } else {
    alert("Voce e morreu");
  }
}

// Exercício 4 - Situação do estudante
// A variável resultado guarda um valor booleano e controla o caminho do if.
function media() {
  let num1 = Number(prompt("Primeira nota:"));
  let num2 = Number(prompt("Segunda nota:"));
  resultado = ((num1 + num2) / 2) >= 6;

  if (resultado) {
    alert(`Média: ${(num1 + num2) / 2} - Aprovado`);
  } else {
    alert(`Média: ${(num1 + num2) / 2} - Reprovado`);
  }
}

// Exercício 5 - Desconto progressivo
// A condição else if avalia níveis diferentes de desconto conforme o valor informado.
function calculardesconto() {
  let preco = Number(prompt("Digite o preço do produto:"));
  let precoFinal = preco;

  if (preco >= 100 && preco < 500) {
    precoFinal = preco - preco * 0.1;
    alert(`desconto de 10% aplicado ${precoFinal.toFixed(2)}`);
  } else if (preco >= 500) {
    precoFinal = preco - preco * 0.2;
    alert(`desconto de 20% aplicado ${precoFinal.toFixed(2)}`);
  } else {
    alert("Nenhum desconto aplicado");
  }
}

// Exercício 6 - IMC com classificação
// O cálculo do IMC usa peso dividido pela altura ao quadrado.
function calcularIMC() {
  let peso = Number(prompt("Digite seu peso em kg:"));
  let altura = Number(prompt("Digite sua altura em metros:"));
  let imc = peso / altura;

  if (imc < 18.5) {
    alert(`Seu IMC é ${imc.toFixed(2)} - Abaixo do peso`);
  } else if (imc >= 18.5 && imc < 25) {
    alert(`Seu IMC é ${imc.toFixed(2)} - Peso normal`);
  } else if (imc >= 25 && imc < 30) {
    alert(`Seu IMC é ${imc.toFixed(2)} - Sobrepeso`);
  } else {
    alert(`peso sobre humano ${imc.toFixed(2)}`);
  }
}

// Exercício 7 - Nome do dia
// O switch escolhe um caso conforme o valor informado e o default trata valores inválidos.
function nomedodia() {
  let dia = Number(prompt("Digite um número de 1 a 7:"));
  let nomeDia;

  switch (dia) {
    case 1:
      nomeDia = "Domingo";
      break;
    case 2:
      nomeDia = "Segunda-feira";
      break;
    case 3:
      nomeDia = "Terça-feira";
      break;
    case 4:
      nomeDia = "Quarta-feira";
      break;
    case 5:
      nomeDia = "Quinta-feira";
      break;
    case 6:
      nomeDia = "Sexta-feira";
      break;
    case 7:
      nomeDia = "Sábado";
      break;
    default:
      nomeDia = "Número inválido. Digite um número de 1 a 7.";
      break;
  }

  alert(`O dia da semana é: ${nomeDia}`);
}

// Exercício 8 - Calculadora com botões
// getElementById localiza um elemento do HTML para ler ou alterar o conteúdo dele.
function obterValores() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);

  return { numero1, numero2 };
}

// A função mostrarResultado atualiza o texto exibido no elemento com id resultado.
function mostrarResultado(operacao, resultado) {
  const textoResultado = document.getElementById("resultado");
  textoResultado.textContent = `Resultado da ${operacao}: ${resultado}`;
}

// As funções de operação recebem os valores, calculam e exibem o resultado na tela.
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
