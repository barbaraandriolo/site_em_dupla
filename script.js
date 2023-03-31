let inputcep = document.querySelector("#cep")



function calcularFrete() {
  let cep = inputcep.value;

  // Gerando valor aleatório para o frete
  let valor = (Math.random() * (50 - 10) + 10).toFixed(2);

  if (cep.length == 0) {
    document.querySelector("#valor-frete").innerHTML = "Por favor, informe um CEP.";
  } else if (cep.length < 8) {
    document.querySelector("#valor-frete").innerHTML = "CEP inválido. O CEP deve conter 8 dígitos.";
  } else {
    document.querySelector("#valor-frete").innerHTML = "Valor do frete: R$" + valor; // atualiza o valor do frete no novo elemento
  }
}
