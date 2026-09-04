//let contador = 10;
//let mensagem = "";

//while (contador >= 1) {
//    mensagem += `Contador: ${contador}:\n `;
// console.log(contador);
//    contador--;
//}
//}
//alert(mensagem);

function contadorr() {
let num = Number(prompt("Digite um número:"));
let contador = 0;
let resultado = "";

while (contador < num) {
    if (contador % 2 === 0) {
        resultado += contador + " ";
    }
        contador++; 
    } 
    
   
  alert(`Resultados:\n${resultado}`);
  }