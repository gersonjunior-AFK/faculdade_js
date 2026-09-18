function cadastrar() {
let num1 = Number(prompt("Digite um número:"));

if (num1 % 2 == 0){
    alert("seu numero e par:")
}else {
    alert("seu numero e impar")
}

}

function maior() {
let num1 = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));

if (num1 > num2){
    alert(`O maior numero e: ${num1}`)
}else if (num2 > num1){
    alert(`O maior numero e: ${num2}`)
}else {
    alert("Os numeros sao iguais")
}
}

function verificaridade() {
let idade = Number(prompt("Digite sua idade:"));

if (idade >= 16){
    alert("Voce pode votar")
}else if (idade >= 18 && idade <= 70){
    alert("Voce nao pode votar")
}else {
    alert("Voce e morreu")
}
}

function media() {
let num1 = Number(prompt("Primeira nota:"));
let num2 = Number(prompt("Segunda nota:"));
resultado = ((num1 + num2) / 2) >= 6;
if (resultado) {
    alert(`Média: ${(num1 + num2) / 2} - Aprovado`)
}else {
    alert(`Média: ${(num1 + num2) / 2} - Reprovado`)
}
}

function calculardesconto() {
    let preco = Number(prompt("Digite o preço do produto:"));
    let precoFinal = preco;

    if (preco >= 100 && preco < 500) {
        precoFinal = preco - (preco * 0.1);
        alert(`desconto de 10% aplicado ${precoFinal.toFixed(2)}`);
    } else if (preco >= 500) {
        precoFinal = preco - (preco * 0.2);
        alert(`desconto de 20% aplicado ${precoFinal.toFixed(2)}`);
    }
else {
        alert("Nenhum desconto aplicado");
    }
    }

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

