const botoes = document.querySelectorAll("nav button");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        botoes.forEach(btn => btn.classList.remove("ativo"));

        botao.classList.add("ativo");

    });

});