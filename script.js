let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let pergunta = document.getElementById("pergunta");
  let mensagem = document.getElementById("resposta");

  card.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
  pergunta.style.display = "none";
  mensagem.style.display = "flex";
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});