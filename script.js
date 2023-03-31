function calcularFrete() {
  var cep = document.getElementById("cep").value;

  // Gerando valor aleatório para o frete
  var valor = (Math.random() * (50 - 10) + 10).toFixed(2);

  if (cep.length == 0) {
    document.getElementById("resultado").innerHTML = "Por favor, informe um CEP.";
  } else if (cep.length < 8) {
    document.getElementById("resultado").innerHTML = "CEP inválido. O CEP deve conter 8 dígitos.";
  } else {
    document.getElementById("valor-frete").innerHTML = "Valor do frete: R$" + valor; // atualiza o valor do frete no novo elemento
  }
}
