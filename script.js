// Seleciona o botão e o parágrafo que será atualizado.
const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

// Executa esta função quando o usuário clicar no botão.
botao.addEventListener("click", function () {
    // Altera o texto exibido na página.
    mensagem.textContent = "A inovação começa com uma ideia e cresce quando colocamos o conhecimento em prática!";

    // Muda a aparência do parágrafo para destacar a mensagem.
    mensagem.style.backgroundColor = "#d8f3dc";
});
