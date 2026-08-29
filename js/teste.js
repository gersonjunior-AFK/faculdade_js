function obterValores() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    return { numero1, numero2 };
}

function mostrarResultado(operacao, resultado) {
    let textoResultado = document.getElementById('resultado');
    textoResultado.textContent = `Resultado da ${operacao}: ${resultado}`;
}

function somar() {
    let { numero1, numero2 } = obterValores();
    let resultado = numero1 + numero2;
    mostrarResultado('soma', resultado);
}

function subtrair() {
    let { numero1, numero2 } = obterValores();
    let resultado = numero1 - numero2;
    mostrarResultado('subtração', resultado);
}

function multiplicar() {
    let { numero1, numero2 } = obterValores();
    let resultado = numero1 * numero2;
    mostrarResultado('multiplicação', resultado);
}

function dividir() {
    let { numero1, numero2 } = obterValores();

    if (numero2 === 0) {
        let textoResultado = document.getElementById('resultado');
        textoResultado.textContent = 'Não é possível dividir por zero.';
        return;
    }

    let resultado = numero1 / numero2;
    mostrarResultado('divisão', resultado);
}
