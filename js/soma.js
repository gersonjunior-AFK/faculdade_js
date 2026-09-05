function mostrarAlerta(mensagem) {
   const alerta = document.getElementById("alertaResultado");

   if (alerta) {
      alerta.textContent = mensagem;
      alerta.classList.add("alert-visible");
      return;
   }

   alert(mensagem);
}

function somar() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);

   mostrarAlerta(num1 + num2);
 }
 function multiplicar() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);

   mostrarAlerta(num1 * num2);
 }
 function subtrair() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado").innerText = "somar " +(num1 - num2);

   mostrarAlerta(num1 - num2);
 }
 function dividir() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);

   mostrarAlerta(num1 / num2);
 }

 function somarComWhile() {
    let contador = 1;
    let soma = 0;

   while (contador <= 5) {
        soma += contador;
        contador++;
    }

    console.log(soma);

   mostrarAlerta("O resultado é " + soma + ".");
 }
 function media() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let media = (nota1 + nota2 + nota3) / 3;
   mostrarAlerta('A média é ' + media.toFixed(2));
 }