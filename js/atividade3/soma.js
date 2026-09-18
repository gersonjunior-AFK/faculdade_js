//exercicio 1
function mostrarresultado(mensagem = "Você não pode entrar.") {
  const idadeInput = document.getElementById("idade") || document.getElementById("numero1");
  const idade = Number(idadeInput.value);
  const resultado = document.getElementById("resultado");

  if (idade >= 18) {
    resultado.innerText = "Verificação: maior de idade";
  } else {
    resultado.innerText = "Verificação: menor de idade";
    alert(mensagem);
  }
}

//exercicio 2
function converter() {
  const inputTexto = document.getElementById("numero1") || document.getElementById("txtPalavra");
  const texto = inputTexto.value;
  const caixaAlta = texto.toUpperCase();
  const tamanho = texto.length;

  document.getElementById("resultado").innerText = caixaAlta + " (" + tamanho + " letras)";
}